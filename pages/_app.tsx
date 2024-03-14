import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider
      clientId={
        "200585284365-4bjem56b24s996trefvf4egi1787827e.apps.googleusercontent.com"
      }
    >
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
