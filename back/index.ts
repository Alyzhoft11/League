import express from "express";
import cors from "cors";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

server.listen(4000, () => {
  console.log("working");
});

app.get("/", (_, res) => {
  res.send("TEST");
});
