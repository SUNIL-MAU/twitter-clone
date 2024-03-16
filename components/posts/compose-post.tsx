import { UserType } from "@/global/interfaces";
import React from "react";
import Avatar from "@/components/ui/avatar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icons from "@/components/icons";

export const IconWrapper = ({
  children,
  ...props
}: { children: React.ReactNode } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div
      {...props}
      className=" cursor-pointer text-sky-500 h-8 w-8 flex justify-center items-center  rounded-full hover:bg-sky-300/20 transition-all"
    >
      {children}
    </div>
  );
};

const FormSchema = z.object({
  tweet_text: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

interface ComposePostProps {
  user: UserType;
}

const ComposePost = ({ user }: ComposePostProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log({ data });
  }
  return (
    <div className=" grid grid-cols-12  py-3 px-4 pb-0 border-[0.9px] border-b-gray-200 transition-all ">
      <div className="  col-span-1 pr-10">
        <Avatar user={user} />
      </div>
      <div className=" col-span-11 ml-1 ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" space-y-6 w-full "
          >
            <FormField
              control={form.control}
              name="tweet_text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="What is happening?!"
                      className="resize-none text-[20px] p-0"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className=" flex items-center  border-t border-gray-200 py-3 ">
              <div className=" flex-1 flex gap-2">
                <IconWrapper onClick={() => console.log("hey")}>
                  <Icons.image />
                </IconWrapper>
                <IconWrapper>
                  <Icons.gif />
                </IconWrapper>
                <IconWrapper>
                  <Icons.poll />
                </IconWrapper>
                <IconWrapper>
                  <Icons.emoji />
                </IconWrapper>
                <IconWrapper>
                  <Icons.schedule />
                </IconWrapper>
              </div>
              <Button variant="primary" type="submit">
                Post
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ComposePost;
