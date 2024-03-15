import { UserType } from "@/global/interfaces";
import Avatar from "./ui/avatar";

const ProfileCover = ({ user }: { user: UserType }) => {
  return (
    <div className=" absolute bottom-[2rem] rounded-full w-full hover:bg-gray-200 p-3 right-3">
      <div className=" flex items-center">
        <Avatar user={user} />
        <div>
          <h4></h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileCover;
