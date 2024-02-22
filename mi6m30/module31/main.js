//31-2 Access Value, Nested Object, Optional Chaining
//data access
const data = [{ id: 1, name: "abul", address: "Dhaka" }];
console.log(data[0].name);

const products = {
  count: 500,
  data2: [
    { id: 1, name: "Moudud", price: 5000 },
    { id: 2, name: "Moudud2", price: 8000 },
  ],
};

console.log(products.data2[1].price);

const person = {
  id: 1,
  name: "Tania",
  address: {
    present: "Dhaka",
    permanent: "Rangpur",
    street: {
      first: "54/A",
      second: "KHA",
      third: "Rangpur",
    },
  },
};

console.log(person.address.street.first);
console.log(person.address.street.third);
