import { Outlet, useNavigate } from "react-router-dom";

import { MenuListProps } from "../../interfaces/MenuList.interface";

import MenuList from "../MenuList/MenuList";

interface LayoutProps {
  meunList: Array<MenuListProps> | undefined;
}

export default function Layout({ meunList }: LayoutProps) {
  const navigate = useNavigate();

  const handleNavigation = ({ slug }: MenuListProps) => {
    navigate(slug);
  };

  return (
    <div className="layout">
      <nav className="app-navigation">
        <MenuList items={meunList || []} onNavigate={handleNavigation} />
      </nav>

      <Outlet />
    </div>
  );
}
