import MenuListItem from "./MenuListItem";

import { MenuListProps } from "../../interfaces/MenuList.interface";

import './MenuList.css'

export interface MenuListCompProps {
  items: Array<MenuListProps>;
  onNavigate?: (data: MenuListProps) => void;
}

export default function MenuList({
  items,
  onNavigate = () => {},
}: MenuListCompProps) {
  return (
    <ul className="menu-list">
      {items.map((item) => (
        <MenuListItem key={item.slug} data={item} onNavigate={onNavigate} />
      ))}
    </ul>
  );
}
