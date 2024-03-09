const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Assalam Alaikum Habibi");
  } else if (req.url === "/about") {
    res.end("What You Want To Know Habibi ? ");
  } else {
    res.end(`<h1>OOPSIE HABIBI</h1> <a href="/">Go Back</a>`);
  }
});
server.listen(5000);
