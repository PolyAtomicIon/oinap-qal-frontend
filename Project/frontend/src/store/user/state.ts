export interface ExampleUserInterface {
  email: string;
}

function state(): ExampleUserInterface {
  return {
    email: 'a@a.com',
  };
}

export default state;
