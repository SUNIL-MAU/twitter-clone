import FeedCard from "@/components/feed-card";
import GoogleLoginButton from "@/components/google-login-btn";
import XLogo from "@/components/logo";
import ProfileCover from "@/components/profile-cover";
import SideNavBar from "@/components/sidenavbar";
import { UserType } from "@/global/interfaces";
import { useGetCurrentUser } from "@/hooks/user";
import ComposePost from "@/components/posts/compose-post";

const HomePage = () => {
  const { user } = useGetCurrentUser();

  return (
    <div className=" grid grid-cols-12 h-screen w-screen px-[6rem]">
      <div className=" col-span-3  relative mt-2 px-4">
        <XLogo />
        <SideNavBar />
        {user ? <ProfileCover user={user} /> : null}
      </div>
      <div className=" col-span-6 border-[0.9px] border-l-gray-200 border-r-gray-200">
        <ComposePost user={user as UserType} />
        <FeedCard user={user as UserType} />
      </div>
      <div className=" col-span-3">{!user ? <GoogleLoginButton /> : null}</div>
    </div>
  );
};

export default HomePage;
