import { UserType } from "@/global/interfaces";
import React, { useCallback, useState } from "react";
import Avatar from "@/components/ui/avatar";

import axios from "axios";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Icons from "@/components/icons";
import { graphqlClient } from "@/client/api";
import { getSignedURLForTweetQuery } from "@/graphql/queries/tweet";
import { useCreateTweet } from "@/hooks/tweet";
import toast from "react-hot-toast";

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

interface ComposePostProps {
  user: UserType;
}

const ComposePost = ({ user }: ComposePostProps) => {
  const [fileUrl, setFileUrl] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [content, setContent] = useState<string>("");
  const [uploadUrl, setUploadUrl] = useState<string>("");
  const { mutateAsync } = useCreateTweet();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const uploadFileToServer = async (
    file: File,
    uploadUrl: string
  ): Promise<void> => {
    await axios.put(uploadUrl, file, {
      headers: {
        "Content-Type": file.type,
      },
    });
  };

  const constructImageURL = (uploadUrl: string): string => {
    const url = new URL(uploadUrl);
    return `${url.origin}${url.pathname}`;
  };

  const onSubmit = useCallback(async () => {
    let imageURL = null;
    try {
      setIsLoading(true);
      if (file && fileUrl) {
        await uploadFileToServer(file, uploadUrl);
        const url = constructImageURL(uploadUrl);
        imageURL = url;
      }

      await mutateAsync({
        content,
        imageURL,
      });
      setContent("");
      setFileUrl("");
    } catch (error: any) {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, fileUrl, content]);

  const removeFileHandler = useCallback(() => {
    setUploadUrl("");
    setFile(null);
    setFileUrl("");
  }, [uploadUrl, file, fileUrl]);

  const handleImageChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const files = e.target.files;
        console.log(files);

        if (files && files.length > 0) {
          const file = files[0];

          setFile(file);
          const imageUrl = URL.createObjectURL(file);

          setFileUrl(imageUrl);
          const { getPresignedUrl } = await graphqlClient.request(
            getSignedURLForTweetQuery,
            {
              imageName: file.name,
              imageType: file.type,
            }
          );
          if (!getPresignedUrl) return;
          setUploadUrl(getPresignedUrl);
        }
      } catch (error: any) {
        toast.error(error.response.errors[0].message);
      }
    },
    [uploadUrl, file, fileUrl]
  );

  return (
    <div className=" grid grid-cols-12  py-3 px-4 pb-0 border-[0.9px] border-b-gray-200 transition-all ">
      <div className="  col-span-1 pr-10">
        <Avatar user={user} />
      </div>
      <div className=" col-span-11 ml-1 ">
        <Textarea
          placeholder="What is happening?!"
          className="resize-none text-[20px] p-0"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {fileUrl ? (
          <div className=" my-4 relative border border-gray-200 rounded-2xl p-3">
            <img
              src={fileUrl}
              className=" w-full h-full rounded-2xl"
              alt="file"
            />
            <span
              onClick={() => removeFileHandler()}
              className=" absolute top-1 right-1"
            >
              <Icons.remove />
            </span>
          </div>
        ) : null}

        <div className=" flex items-center  border-t border-gray-200 py-3 ">
          <div className=" flex-1 flex gap-2">
            <label htmlFor="dropzone-file">
              <IconWrapper>
                <Icons.image />
              </IconWrapper>
            </label>

            <Input
              id="dropzone-file"
              accept="image/png, image/jpeg"
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />

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
          <Button
            disabled={isLoading}
            variant="primary"
            type="button"
            onClick={onSubmit}
          >
            {isLoading && <Icons.spinner />}
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComposePost;
