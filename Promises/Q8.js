fetch("https://jsonplaceholder.typicode.com/posts")
  .then((respsone) => {
    return respsone.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].title);
    }
  })
  .catch((err) => {
    console.log(err);
  });
