import { Story, Meta } from '@storybook/react';
import { Footer, FooterProps } from './footer';

export default {
  component: Footer,
  title: 'Footer',
} as Meta;

const Template: Story<FooterProps> = () => {
  return (
    <div className="bg-gray-100 p-20">
      <Footer name="Kanisk Chakraborty" />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  name: 'Kanisk Chakraborty',
};
