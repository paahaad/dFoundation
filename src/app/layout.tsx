"use client";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import { toast } from "sonner";

import { LifeBuoy, Share, SquareUser, Triangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ModeToggle } from "@/components/theme-toggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <div className="grid h-screen w-full pl-[56px]">
                <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
                  <div className="border-b p-2">
                    <Button variant="outline" size="icon" aria-label="Home">
                      <Triangle className="size-5 fill-foreground" />
                    </Button>
                  </div>
                  <nav className="grid gap-1 p-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-lg bg-muted"
                          aria-label="Playground"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5em"
                            height="1.5em"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            >
                              <path d="m7 11l2-2l-2-2m4 6h4" />
                              <rect
                                width="18"
                                height="18"
                                x="3"
                                y="3"
                                rx="2"
                                ry="2"
                              />
                            </g>
                          </svg>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right" sideOffset={5}>
                        White Paper
                      </TooltipContent>
                    </Tooltip>
                  </nav>
                  <nav className="mt-auto grid gap-1 p-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="mt-auto rounded-lg"
                          aria-label="Help"
                        >
                          <LifeBuoy className="size-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right" sideOffset={5}>
                        Help
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="mt-auto rounded-lg"
                          aria-label="Account"
                        >
                          <SquareUser className="size-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right" sideOffset={5}>
                        Account
                      </TooltipContent>
                    </Tooltip>
                  </nav>
                </aside>
                <div className="flex flex-col">
                  <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
                    <h1 className="text-xl font-semibold">dFoundation</h1>
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-auto gap-1.5 text-sm"
                      onClick={() => {
                        const url = window.location.href;
                        const tempInput = document.createElement("input");
                        tempInput.value = url;
                        document.body.appendChild(tempInput);

                        tempInput.select();
                        tempInput.setSelectionRange(0, 99999); // For mobile devices

                        document.execCommand("copy");
                        document.body.removeChild(tempInput);
                        toast("Copied to clipboard", {
                          description: window.location.href,
                        });
                      }}
                    >
                      <Share className="size-3.5" />
                      Share
                    </Button>
                    <ModeToggle />
                  </header>
                  <main className="overflow-auto p-4 w-full">{children}</main>
                </div>
              </div>
            </TooltipProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
