import FeedCard from "@/components/feed-card";
import GoogleLoginButton from "@/components/google-login-btn";
import XLogo from "@/components/logo";
import ProfileCover from "@/components/profile-cover";
import SideNavBar from "@/components/sidenavbar";
import { UserType } from "@/global/interfaces";
import { useGetCurrentUser } from "@/hooks/user";
import ComposePost from "@/components/posts/compose-post";
import Layout from "../layout";

const HomePage = () => {
  const { user } = useGetCurrentUser();

  return (
    <Layout>
      <div className=" col-span-6 border-[0.9px] border-l-gray-200 border-r-gray-200">
        <ComposePost user={user as UserType} />
        <FeedCard user={user as UserType} />
      </div>
    </Layout>
  );
};

export default HomePage;
