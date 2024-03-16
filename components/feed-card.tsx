import Avatar from "@/components/ui/avatar";
import { UserType } from "@/global/interfaces";
import { HiDotsHorizontal } from "react-icons/hi";
import { LuMessageSquarePlus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { MdIosShare } from "react-icons/md";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import PopoverContentCard from "@/components/popover-content-card";
import Icons from "@/components/icons";

interface FeedCardProps {
  user: UserType;
}

const FeedCard = ({ user }: FeedCardProps) => {
  return (
    <div className=" grid grid-cols-12 py-3 px-4 hover:bg-gray-100 border-[0.9px] border-b-gray-200 transition-all cursor-pointer">
      <div className="  col-span-1">
        <Avatar user={user} />
      </div>
      <div className=" col-span-11 ml-1 ">
        <div className=" flex">
          <div className=" flex-1 flex items-center ">
            <span className=" font-semibold hover:underline transition-all text-[15px] mr-1">
              Harpreet Singh
            </span>
            <span className=" text-gray-400 font-medium  text-[15px]">
              @hsingh &#x2022; 4h
            </span>
          </div>

          <div className="  ">
            <Popover>
              <PopoverTrigger>
                <div className="group/parent  flex gap-[2px] items-center">
                  <span className=" h-8 w-8 grid place-items-center  rounded-full transition-all group-hover/parent:bg-sky-100 ">
                    <Icons.ellipsis />
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContentCard
                isArrow={false}
                align={"end"}
                sideOffset={-20}
                alignOffset={-6}
                menuList={[
                  { title: "Add an existing account" },
                  { title: "Log out @sunilmaurya7127" },
                ]}
              />
            </Popover>
          </div>
        </div>
        <p className="  pb-5 text-[15px] ">
          How do I say to someone “Tu Ch*tiya hai kya?” But professionally?
        </p>
        <div className=" text-gray-500 font-medium flex justify-between text-[18px] items-center pb-2">
          <div className="group/parent  flex gap-[2px] items-center">
            <span className=" h-8 w-8 grid place-items-center  rounded-full transition-all group-hover/parent:bg-sky-100 ">
              <Icons.reply />
            </span>
            <span className=" group-hover/parent:text-sky-500 text-[14px] ">
              1.3k
            </span>
          </div>
          <div className="group/parent  flex gap-[2px] items-center">
            <span className=" h-8 w-8 grid place-items-center  rounded-full transition-all group-hover/parent:bg-green-200/25 ">
              <Icons.repost />
            </span>
            <span className=" group-hover/parent:text-green-500 text-[14px] text-black/50 ">
              1.3k
            </span>
          </div>
          <div className="group/parent  flex gap-[2px] items-center">
            <span className=" h-8 w-8 grid place-items-center  rounded-full transition-all group-hover/parent:bg-red-100 ">
              <Icons.heart />
            </span>
            <span className=" group-hover/parent:text-red-500 text-[14px] text-black/50 ">
              1.3k
            </span>
          </div>
          <div className="group/parent  flex gap-[2px] items-center">
            <span className=" h-8 w-8 grid place-items-center  rounded-full transition-all group-hover/parent:bg-sky-100 ">
              <Icons.share />
            </span>
            <span className=" group-hover/parent:text-sky-500 text-[14px] ">
              1.3k
            </span>
          </div>
          <div className="group/parent  flex gap-[2px] items-center">
            <span className=" h-8 w-8 grid place-items-center  rounded-full transition-all group-hover/parent:bg-sky-100 ">
              <Icons.bookmark />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
