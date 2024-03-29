import { UserType } from "@/global/interfaces";
import { useGetCurrentUser } from "@/hooks/user";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface AvatarProps {
  user: UserType;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ user, isLarge, hasBorder }) => {
  const router = useRouter();

  // const onClick = useCallback(
  //   (event: any) => {
  //     event.stopPropagation();

  //     const url = `/users/${userId}`;

  //     router.push(url);
  //   },
  //   [router, userId]
  // );

  return (
    <div
      className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32" : "h-10"}
        ${isLarge ? "w-32" : "w-10"}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        // onClick={onClick}
        src={(user?.profileImageUrl || "/images/placeholder.png") as string}
      />
    </div>
  );
};

export default Avatar;
