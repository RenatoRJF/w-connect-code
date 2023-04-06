import { HTMLAttributes, MouseEvent } from "react";

import {
  MenuBaseProps,
  MenuListProps,
} from "../../interfaces/MenuList.interface";

export interface MenuListItemProps extends HTMLAttributes<HTMLLIElement> {
  data: MenuListProps;
  onNavigate?: (data: MenuBaseProps) => void;
}

export default function MenuListItem({
  data,
  onNavigate = () => {},
}: MenuListItemProps) {
  const { title, children } = data;

  const handleClick = (
    e: MouseEvent<HTMLLIElement>,
    menuProps: MenuBaseProps
  ) => {
    e.stopPropagation();

    onNavigate(menuProps);
  };

  return (
    <li
      className="menu-list-item"
      role="button"
      onClick={(e) => handleClick(e, data)}
    >
      {title}

      {children && (
        <ul className="menu-list-sublist">
          {children?.map((childrenProps) => (
            <li
              key={childrenProps.slug}
              className="menu-list-item subitem"
              onClick={(e) => handleClick(e, childrenProps)}
            >
              {childrenProps.title}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
