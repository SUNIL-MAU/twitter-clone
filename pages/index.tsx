import { Inter } from "next/font/google";
import { FaXTwitter, FaRegBookmark } from "react-icons/fa6";
import { LuHome, LuUser2 } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import FeedCard from "@/components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "@/client/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/queries/user";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarMenu {
  title: string;
  icon: React.ReactNode;
}

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

export default function Home() {
  const handleLoginWithGoogle = async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken) return toast.error("Google token not found");

    const { verifyGoogleToken } = await graphqlClient.request(
      verifyUserGoogleTokenQuery,
      {
        token: googleToken,
      }
    );
    toast.success("Verified succusfully!");
    console.log("data", verifyGoogleToken);

    if (verifyGoogleToken)
      window.localStorage.setItem("__twitter_token__", verifyGoogleToken);
  };
  return (
    <main className={`flex min-h-screen   ${inter.className}`}>
      <div className=" grid grid-cols-12 h-screen w-screen px-[6rem]">
        <div className=" col-span-3  mt-2 px-4">
          <div className=" text-4xl h-fit w-fit hover:bg-gray-200 rounded-full p-2 cursor-pointer transition-all">
            <FaXTwitter />
          </div>
          <div className=" my-4">
            <ul>
              {sideBarMenuItems.map((item: TwitterSidebarMenu) => (
                <li
                  key={item.title}
                  className=" flex  items-center justify-start  p-3 h-fit w-fit hover:bg-gray-200 rounded-full  cursor-pointer transition-all"
                >
                  <span className=" text-2xl font-medium">{item.icon}</span>{" "}
                  <span className=" mx-5 text-xl font-normal">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
            <button className=" bg-[#188CD8] mt-8 hover:bg-[#188CD8] rounded-full text-white font-bold text-base p-4 w-full ">
              Post
            </button>
          </div>
        </div>
        <div className=" col-span-6 border-l border-r border-gray-200">
          <FeedCard />
        </div>

        <div className=" col-span-3">
          <div className=" p-5 border border-gray-200 rounded-lg">
            <GoogleLogin onSuccess={(cred) => handleLoginWithGoogle(cred)} />
          </div>
        </div>
      </div>
    </main>
  );
}
