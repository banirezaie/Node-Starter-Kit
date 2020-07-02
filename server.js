const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const quotes = require("./quotes.json");

app.get("/quotes", (req, res) => {
  res.json(quotes);
});
app.post("/quotes", (req, res) => {
  const { quote } = req.body;
  quotes.push(quote);
  console.log(quote);
  res.json({ success: true });
});

app.get("/quotes/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const quote = quotes.find((x) => x.id === Number(id));
  if (quote) {
    res.send(quote);
  } else {
    res.sendStatus(404);
  }
});

app.delete("/quotes/:id", (req, res) => {
  const { id } = req.params;
  const removeQuote = albums.filter((x) => x.id !== Number(id));

  if (quotes.length !== removeQuote.length) {
    quotes = removeQuote;
    res.send({ message: "quote deleted" });
  } else {
    res.status(404).send("couldn't find such a thing you asked bitch!");
  }
});

app.listen(5000, () => {
  console.log("Listening to 5000");
});
