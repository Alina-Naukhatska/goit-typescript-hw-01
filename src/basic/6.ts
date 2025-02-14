type Address = {
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  email: string;
  address?: Address;
};

const mango: Person = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const poly: Person = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com'
};