const http = require("http");
const url = require("url");

module.exports = http.createServer((req, res) => {
  const apiOptions = require("./controller.js");
  const urlParse = url.parse(req.url, true);

  console.log(`Request type: ${req.method} | Endpoint: ${urlParse.pathname}`);
  switch (req.method) {
    case "GET":
      if (urlParse.pathname === "/buys") {
        apiOptions.getBuys(req, res);
      }
      break;
    case "POST":
      if (urlParse.pathname === "/buys") {
        apiOptions.createBuys(req, res);
      }
      break;
    case "PUT":
      apiOptions.updateBuys(req, res);
      break;
    case "GET":
      apiOptions.deleteBuys(req, res);
    
    case "GET":
      if (urlParse.pathname === "/buysCompleted") {
        apiOptions.getBuysCompleted(req, res);
      }
      break;
    case "GET":
      if (urlParse.pathname === "/buysUncompleted") {
        apiOptions.getBuysUncompleted(req, res);
      }
      break;
    default:
      return;
  }
});
