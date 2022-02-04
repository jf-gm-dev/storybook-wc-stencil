import notes from '../../components/my-component/readme.md';

export default {
  title: 'UI/My Component',
  args: {
    first: 'Juan Fernando',
    middle: 'Gómez',
    last: 'Maldonado',
  },
  argTypes: {
    first: {
      description: 'First name',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    middle: {
      type: {
        summary: 'string',
      },
    },
    last: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    notes,
  },
};

const Template = args =>
  `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>`;

export const Basic = Template.bind({});
