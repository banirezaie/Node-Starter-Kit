const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const albums = require("./album.json");

app.get("/albums", (req, res) => {
  res.json(albums);
});
app.post("/album", (req, res) => {
  const { album } = req.body;
  albums.push(album);
  console.log(album);
  res.json({ success: true });
});

app.get("/albums/:albumId", (req, res) => {
  const { albumId } = req.params;
  console.log(req.body);
  const album = albums.find((x) => x.albumId === albumId);
  if (album) {
    res.send(album);
  } else {
    res.sendStatus(404);
  }
});

app.delete("/albums/:albumId", (req, res) => {
  const { albumId } = req.params;
  const removeAlbum = albums.filter((x) => x.albumId !== albumId);

  if (albums.length !== removeAlbum.length) {
    albums = removeAlbum;
    res.send({ message: "Album deleted" });
  } else {
    res.status(404).send("couldn't find such a thing you asked bitch!");
  }
});

app.listen(4000, () => {
  console.log("on port 4000");
});
