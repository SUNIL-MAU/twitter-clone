import FeedCard from "@/components/FeedCard";
import GoogleLoginButton from "@/components/google-login-btn";
import XLogo from "@/components/logo";
import ProfileCover from "@/components/profile-cover";
import SideNavBar from "@/components/sidenavbar";
import { useGetCurrentUser } from "@/hooks/user";

const HomePage = () => {
  const { user } = useGetCurrentUser();

  return (
    <div className=" grid grid-cols-12 h-screen w-screen px-[6rem]">
      <div className=" col-span-3  relative mt-2 px-4">
        <XLogo />
        <SideNavBar />
        {user ? <ProfileCover user={user} /> : null}
      </div>
      <div className=" col-span-6 border-l border-r border-gray-200">
        <FeedCard />
      </div>
      <div className=" col-span-3">{!user ? <GoogleLoginButton /> : null}</div>
    </div>
  );
};

export default HomePage;
