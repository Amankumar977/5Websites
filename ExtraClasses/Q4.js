const books = [
  {
    name: "Atomic habit",
    author: "James clear",
    publishingYear: 2021,
  },
  {
    name: "Do epic shit",
    author: "Ankur warikoo",
    publishingYear: 2010,
  },
  {
    name: "Courage to be disliked",
    author: "Ichiro Kishimi ",
    publishingYear: 2009,
  },
  {
    name: "The great gatsby",
    author: "F scott ",
    publishingYear: 1998,
  },
];

let filteredBooks = books.filter((elem) => elem.publishingYear <= 2010);
filteredBooks.forEach((elem) => {
  console.log(
    `The books is ${
      elem.name
    } and the books authors is ${elem.author.toUpperCase()}`
  );
});
