import { Menu, Nav } from '@chakrakan-dev/shared/ui';

const menu: Menu[] = [
  { title: 'Get in touch', url: '/get-in-touch' },
  { title: 'Ramblings', url: '/ramblings' },
];

export function Index() {
  return (
    <>
      <Nav menus={menu} />
    </>
  );
}

export default Index;
