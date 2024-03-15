import React from "react";
import Image from "next/image";
import Avatar from "@/components/ui/avatar";

const FeedCard = () => {
  return (
    <div
      className="
      border-b-[1px] 
      border-neutral-800 
      p-5 
      cursor-pointer 
      hover:bg-gray-100 
      transition
    "
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              className="

              font-semibold 
              cursor-pointer 
              hover:underline
          "
            >
              {/* {data.user.name} */}
              sunil
            </p>
            <span
              // onClick={goToUser}
              className="
              text-neutral-500
              cursor-pointer
              hover:underline
              hidden
              md:block
          "
            >
              {/* @{data.user.username} */}
              @sunilmaurya
            </span>
            <span className="text-neutral-500 text-sm">
              {/* {createdAt} */}
              thusday
            </span>
          </div>
          <div className=" mt-1">
            {/* {data.body} */}
            this is first twite
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
