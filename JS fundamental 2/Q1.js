const users = [
  {
    id: 1,
    name: "Mithun",
  },
  {
    id: 2,
    name: "Aman",
  },
];

let isUserPresent = (name) => {
  let isPresent = users.some((user) => user.name === name);
  if (isPresent) {
    console.log(`Yes, ${name} is a valid user`);
  } else {
    console.log(`No, ${name} is Not a valid user`);
  }
};

isUserPresent("Aman");
