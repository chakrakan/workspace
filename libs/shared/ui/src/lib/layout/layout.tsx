import { Header } from '../header/header';
import { Nav, NavProps } from '../..';

export interface LayoutProps extends NavProps {
  layoutStyle: string;
}

export function Layout(props: LayoutProps) {
  return (
    <div className={props.layoutStyle}>
      <Header name="devkanisk" index={3} />
      <Nav menus={props.menus} />
    </div>
  );
}

export default Layout;
