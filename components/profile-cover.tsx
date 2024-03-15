import { UserType } from "@/global/interfaces";
import Avatar from "./ui/avatar";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
} from "@/components/ui/popover";

const ProfileCover = ({ user }: { user: UserType }) => {
  return (
    <Popover>
      <div className=" absolute bottom-[2rem] rounded-full cursor-pointer hover:bg-gray-200 p-3 right-3 left-3">
        <PopoverTrigger className=" flex items-center w-full gap-3">
          <Avatar user={user} />
          <div className="text-start flex-1">
            <h4 className=" font-semibold text-base">{`${user.firstName} ${user.lastName}`}</h4>
            <h5 className=" text-sm text-gray-500">@sunilmaurya7127</h5>
          </div>
          <span className=" pr-3">
            <HiDotsHorizontal />
          </span>
          <PopoverContent sideOffset={20} className=" p-0 py-3 rounded-2xl ">
            <h5 className=" py-2 px-4 font-semibold text-base cursor-pointer hover:bg-gray-100">
              Add an existing account
            </h5>
            <h5 className=" py-2 px-4 cursor-pointer font-semibold text-base hover:bg-gray-100">
              Log out @sunilmaurya7127
            </h5>

            <PopoverArrow width={12} height={10} className=" fill-white" />
          </PopoverContent>
        </PopoverTrigger>
      </div>
    </Popover>
  );
};

export default ProfileCover;
