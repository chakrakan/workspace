import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './header';

export default {
  component: Header,
  title: 'Header',
} as Meta;

const Template: Story<HeaderProps> = () => {
  return <Header name="devkanisk" index={3} />;
};

export const Primary = Template.bind({});

Primary.args = {
  name: 'devkanisk',
};
