import PopoverContentCard from "@/components/popover-content-card";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { UserType } from "@/global/interfaces";
import { HiDotsHorizontal } from "react-icons/hi";
import Avatar from "@/components/ui/avatar";

const ProfileCover = ({ user }: { user: UserType }) => {
  return (
    <Popover>
      <div className=" absolute bottom-[2rem] rounded-full cursor-pointer hover:bg-gray-200 p-3 right-3 left-3">
        <PopoverTrigger className=" flex items-center w-full gap-3">
          <Avatar user={user} />
          <div className="text-start flex-1">
            <h4 className=" font-semibold text-[14px]">{`${user.firstName} ${user.lastName}`}</h4>
            <h5 className=" text-sm text-gray-500">@sunilmaurya7127</h5>
          </div>
          <span className=" pr-3">
            <HiDotsHorizontal />
          </span>
          <PopoverContentCard
            menuList={[
              { title: "Add an existing account" },
              { title: "Log out @sunilmaurya7127" },
            ]}
          />
        </PopoverTrigger>
      </div>
    </Popover>
  );
};

export default ProfileCover;
