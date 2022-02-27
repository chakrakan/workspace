export interface NavProps {
  menus: Menu[];
}

export interface Menu {
  url: string;
  title: string;
}

export function Nav(props: NavProps) {
  return (
    <nav className="flex sm:justify-center space-x-4">
      {props.menus.map((menuItem) => (
        <a
          href={menuItem.url}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          {menuItem.title}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
