import notes from '../../components/cool-button/readme.md';
import storyGenerator from 'story-wc-generator';

const { args, argTypes, Template } = storyGenerator('cool-button', {
  text: { value: 'Click me!', description: 'Text label', type: 'string' },
  color: {
    value: 'primary',
    description: 'Color of button',
    control: 'select',
    options: ['primary', 'secondary', 'dark'],
    type: 'primary | secondary | dark',
  },
});

export default {
  title: 'UI/Cool Button',
  args,
  argTypes,
  parameters: {
    notes,
  },
};

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Dark = Template.bind({});
Dark.args = {
  color: 'dark',
};
