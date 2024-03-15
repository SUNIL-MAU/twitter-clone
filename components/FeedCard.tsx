import Avatar from "@/components/ui/avatar";
import { UserType } from "@/global/interfaces";
import { HiDotsHorizontal } from "react-icons/hi";
import { LuMessageSquarePlus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { MdIosShare } from "react-icons/md";

interface FeedCardProps {
  user: UserType;
}

const FeedCard = ({ user }: FeedCardProps) => {
  return (
    <div className=" grid grid-cols-12 py-3 px-4 hover:bg-gray-200 border-[0.9px] border-b-gray-200 transition-all cursor-pointer">
      <div className="  col-span-1">
        <Avatar user={user} />
      </div>
      <div className=" col-span-11  ">
        <div className=" flex">
          <div className=" flex-1">
            <span>Harpreet Singh</span>
            <span>@hsingh</span>
          </div>

          <div className="  ">
            <HiDotsHorizontal />
          </div>
        </div>
        <p className=" pt-2 pb-5">
          {" "}
          How do I say to someone “Tu Ch*tiya hai kya?” But professionally?
        </p>
        <div className=" flex justify-between text-[18px] items-center pb-2">
          <div>
            <LuMessageSquarePlus />
          </div>
          <div>
            <BiRepost />
          </div>
          <div>
            <FaRegHeart />
          </div>
          <div>
            <IoStatsChart />
          </div>
          <div className=" flex gap-4 items-center">
            <CiBookmark />
            <MdIosShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
