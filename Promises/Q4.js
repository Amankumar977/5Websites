function acceptTitle(books, logTitle) {
  let titleArr = [];
  books.map((elem) => {
    titleArr.push(elem.title);
  });
  return logTitle(titleArr);
}
let books = [
  {
    title: "Leaders eat last",
    author: "Simon Sinek",
    year: 2015,
  },
  {
    title: "Do Epic Shit",
    author: "Ankur warikoo",
    year: 2015,
  },
  {
    title: "The Timeless Wisdom",
    author: "The art of living",
    year: 2009,
  },
];

function logTitle(title) {
  console.log(title.sort());
}
acceptTitle(books, logTitle);
