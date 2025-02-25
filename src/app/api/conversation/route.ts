import { NextResponse } from "next/server";
import { GoogleGenerativeAI, Part } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, protocol } = body;

    if (!messages && !protocol) {
      return new NextResponse("Messages and protocol are required", {
        status: 400,
      });
    }

    // const freeTrail = await checkApiLimit();
    // if (!freeTrail) {
    //   return new NextResponse("Free trial has been expired", {
    //     status: 403,
    //   });
    // }

    const pdfPath = path.join(
      process.cwd(),
      "public",
      "papers",
      `${protocol}.pdf`
    );

    const parts: Part[] = [
      {
        inlineData: {
          data: Buffer.from(fs.readFileSync(pdfPath)).toString("base64"),
          mimeType: "application/pdf",
        },
      },
      {
        text: messages.at(-1).content,
      }
    ];
    const result = await model.generateContent({
      contents: [{ role: "user", parts: parts }],
    });

    console.log("===>", result.response.text());

    return NextResponse.json({
      content: result.response.text(),
    });
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
