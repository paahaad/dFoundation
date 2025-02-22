import React from "react";
import Conversation from "@/components/conversation";

function page({ params: { id } }: { params: { id: string } }) {
  console.log(`/pdfjs/web/viewer.html?file=/papers/.pdf`, id);
  return (
    <div className="flex justify-around gap-2 h-[91vh]">
      <div className="w-[70%] border">
        <iframe
          src={`/pdfjs/web/viewer.html?file=/papers/${id}.pdf`}
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="w-2/4 border p-4">
        <Conversation />
      </div>
    </div>
  );
}

export default page;
