import React from "react";
import { PopoverArrow, PopoverContent } from "@/components/ui/popover";
import * as PopoverPrimitive from "@radix-ui/react-popover";

type Menu = {
  title: string;
  icon?: React.ReactNode;
};

interface PopoverContentCardProps extends PopoverPrimitive.PopperContentProps {
  menuList: Menu[];
  isArrow?: boolean;
}

const PopoverContentCard = ({
  menuList,
  isArrow = true,
  ...props
}: PopoverContentCardProps) => {
  return (
    <PopoverContent {...props} className=" p-0 py-3 rounded-2xl ">
      {menuList.map((menu: Menu) => (
        <h5
          key={menu.title}
          className=" py-2 px-4 font-semibold text-base cursor-pointer hover:bg-gray-100"
        >
          {menu.icon ? <span>{menu.icon}</span> : null} {menu.title}
        </h5>
      ))}
      {isArrow ? (
        <PopoverArrow width={12} height={10} className=" fill-white" />
      ) : null}
    </PopoverContent>
  );
};

export default PopoverContentCard;
