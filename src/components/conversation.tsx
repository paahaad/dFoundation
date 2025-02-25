"use client";
import Heading from "@/components/heading";
import { FormControl, FormField, FormItem, Form, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Empty from "@/components/empty";

import * as z from "zod";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";
import Useravatar from "@/components/useravatar";
import BotAvatar from "@/components/botavatar";
// import { useProModal } from "@/hooks/use-pro-modal";
function Conversation() {
  const router = useRouter();
  const [message, setMessage] = useState<any[]>([]);
//   const useModal =useProModal()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      const userMessage = {
        role: "user",
        content: value.prompt,
      };
      const newMessage = [...message, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessage,
      });
      console.log(response);

      setMessage((current) => [...current, userMessage, response.data]);
      // [{role:"user",content:"cannot find"},{content:"raduius 6lkh"}]

      setTimeout(() => console.log(message), 1000);
    } catch (e:any) {
      if(e?.response?.status === 403){
        // TODO:   useModal.onOpen()

      }
    } finally {
      router.refresh()
    }
  };
  const loading = form.formState.isSubmitting;
  return (
    <div>
      <Heading
        title="Whitepaper Navigator"
        description="Our most advance conversation model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
          >
            <FormField
              name="prompt"
              render={({ field }: any) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={loading}
                      placeholder="🔍 Ask about consensus, nodes, or anything in the whitepaper..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="col-span-12 lg:col-span-2 w-full"
              type="submit"
              disabled={loading}
            >
              Ask
            </Button>
          </form>
        </Form>
      </div>
      <div className="space-y-4 mt-4 ">
        {loading && (
          <div className="p-8 rounded-lg w-full bg-muted flex items-center justify-center">
            <Loader />
          </div>
        )}
        {message.length === 0 && !loading && <Empty label="Start Typing.." />}
        <div className="flex flex-col-reverse gap-y-4 p-2">
          {message.map((e) => (
            <div
              className={cn(
                "p-8 w-full flex items-start rounded-lg gap-x-8",
                e.role === "user"
                  ? "dark:bg-[#2b2b2b] bg-white border border-black/10"
                  : "bg-muted"
              )}
              key={e.content}
            >
              {e.role === "user" ? <Useravatar /> : <BotAvatar />}
              <p className="text-sm">{e.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Conversation;