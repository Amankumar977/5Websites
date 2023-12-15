const fs = require("fs");
fs.appendFile(
  "nodejs_architecture.txt",
  "Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it efficient and lightweight. With Node.js, you can build scalable network applications and handle a large number of concurrent connections. It has a rich ecosystem of packages and modules that you can leverage to enhance your applications. Node.js is widely used for server-side development, enabling you to create web servers, APIs, and real-time applications.",
  (err, data) => {
    if (err) {
      console.log("error");
    } else {
      console.log("Successful");
    }
  }
);
