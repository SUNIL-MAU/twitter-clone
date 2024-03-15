import { PopoverArrow, PopoverContent } from "@/components/ui/popover";

type Menu = {
  title: string;
  icon?: React.ReactNode;
};
type PopoverContentCardProps = {
  menuList: Menu[];
};

const PopoverContentCard = ({ menuList }: PopoverContentCardProps) => {
  return (
    <PopoverContent sideOffset={20} className=" p-0 py-3 rounded-2xl ">
      {menuList.map((menu: Menu) => (
        <h5
          key={menu.title}
          className=" py-2 px-4 font-semibold text-base cursor-pointer hover:bg-gray-100"
        >
          {menu.icon ? <span>{menu.icon}</span> : null} {menu.title}
        </h5>
      ))}
      <PopoverArrow width={12} height={10} className=" fill-white" />
    </PopoverContent>
  );
};

export default PopoverContentCard;
