export interface MenuBaseProps {
  slug: string;
  title: string;
  url: string;
}

export interface MenuListProps extends MenuBaseProps {
  children?: Array<MenuBaseProps>;
}
