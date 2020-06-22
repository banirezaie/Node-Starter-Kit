const express = require("express");

const app = express();

app.get("/chocolate", (req, res) => {
  const { line1, line2, line3 } = req.query;
  res.send({
    line1: "Milk chocolate",
    line2: "Cocoa chocolate",
    line3: line3,
  });
  console.log("this is the chocolate one");
});

app.get("/node", (req, res) => {
  res.send("Hello node!");
});
app.get("/codeyourfuture", (req, res) => {
  res.send("hello CYF!");
});

app.get("/another", (req, res) => {
  res.send("this is another one");
});

app.listen(3000, () => {
  console.log("on port 3000");
});
