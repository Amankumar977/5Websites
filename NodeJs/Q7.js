const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end(
        "<h1> I Am Happy To learn Full stack web Development from PW Skills!</h1>"
      );
      break;
    default:
      res.end("<h1> 404 Not Found ! </h1>");
      break;
  }
});
server.listen(8001);
console.log("Server Started");
