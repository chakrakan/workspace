import { Story, Meta } from '@storybook/react';
import { Menu } from '../nav/nav';
import { Layout, LayoutProps } from './layout';

export default {
  component: Layout,
  title: 'Layout',
} as Meta;

const layoutStyle = 'container mx-auto';
const menus: Menu[] = [{ title: 'Get in touch', url: '/get-in-touch' }];

const Template: Story<LayoutProps> = (args) => {
  return <Layout layoutStyle={args.layoutStyle} menus={args.menus} />;
};

export const Primary = Template.bind({});

Primary.args = {
  layoutStyle,
  menus,
};
