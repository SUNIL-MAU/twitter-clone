import { TwitterSidebarMenu } from "@/global/interfaces";
import { FaRegBookmark } from "react-icons/fa6";
import { LuHome, LuUser2 } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const sideBarMenuItems: TwitterSidebarMenu[] = [
  {
    title: "Home",
    icon: <LuHome />,
  },
  {
    title: "Explore",
    icon: <IoSearchSharp />,
  },
  {
    title: "Notifications",
    icon: <FaRegBell />,
  },
  {
    title: "Messages",
    icon: <HiOutlineMail />,
  },
  {
    title: "Bookmarks",
    icon: <FaRegBookmark />,
  },
  {
    title: "Profile",
    icon: <LuUser2 />,
  },
];

const SideNavBar = () => {
  return (
    <div className=" my-4">
      <ul>
        {sideBarMenuItems.map((item: TwitterSidebarMenu) => (
          <li
            key={item.title}
            className=" flex  items-center justify-start  p-3 h-fit w-fit hover:bg-gray-200 rounded-full  cursor-pointer transition-all"
          >
            <span className=" text-2xl font-medium">{item.icon}</span>{" "}
            <span className=" mx-5 text-xl font-normal">{item.title}</span>
          </li>
        ))}
      </ul>
      <button className=" bg-[#188CD8] mt-8 hover:bg-[#188CD8] rounded-full text-white font-bold text-base p-4 w-full ">
        Post
      </button>
    </div>
  );
};

export default SideNavBar;
