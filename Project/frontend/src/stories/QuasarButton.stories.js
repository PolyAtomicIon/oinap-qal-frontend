
export default {
  title: 'QuasarButton',
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: ['primary', 'red', 'secondary'],
    },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
}

export const Components = (args) => ({
  title: 'Button',
  template: '<q-btn :label="args.label" :color="args.backgroundColor" :size="args.size"/>',
  data() {
    return {
      name: null,
      role: 'User',
      options: ['Admin', 'Supervisor', 'User']
    }
  },
  setup(){
    return { args };
  }
})

Components.args = {
  backgroundColor: "primary",
  label: 'Button',
  size: "large"
};
