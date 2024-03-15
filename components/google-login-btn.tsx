import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { graphqlClient } from "@/client/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/queries/user";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const GoogleLoginButton = () => {
  const queryClient = useQueryClient();

  const handleLoginWithGoogle = async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    console.log({ googleToken });
    try {
      if (!googleToken) return toast.error("Google token not found");

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyUserGoogleTokenQuery,
        {
          token: googleToken,
        }
      );
      toast.success("Verified succusfully!");
      console.log("data", verifyGoogleToken);

      if (verifyGoogleToken) {
        window.localStorage.setItem("__twitter_token__", verifyGoogleToken);
      }
      await queryClient.invalidateQueries({ queryKey: ["current-user"] });
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <div className=" p-5 border border-gray-200 rounded-lg">
      <GoogleLogin onSuccess={(cred) => handleLoginWithGoogle(cred)} />
    </div>
  );
};

export default GoogleLoginButton;
