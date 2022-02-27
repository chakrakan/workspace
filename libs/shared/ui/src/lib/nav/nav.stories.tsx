import { Story, Meta } from '@storybook/react';
import { Nav, Menu, NavProps } from './nav';

export default {
  component: Nav,
  title: 'Nav',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
} as Meta;

const menus: Menu[] = [
  { title: 'Home', url: '/home' },
  { title: 'About', url: '/about' },
];

const Template: Story<NavProps> = (args) => {
  return (
    <div className="bg-gray-100 p-20">
      <Nav menus={args.menus} />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  menus,
};
