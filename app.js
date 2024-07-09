const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
//   process.exit();
// Event Loop
});

server.listen(3000);
