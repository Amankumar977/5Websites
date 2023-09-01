fetch("https//jsonplaceholder.typicode.com/posts/13456789")
  .then((respsone) => {
    return respsone.json();
  })
  .catch((err) => {
    console.log("SomeThing went wrong!", err);
  });
