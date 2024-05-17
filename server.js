const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Ok server is ready");
});

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000/",
    methods: ["GET", "POST"],
  },
});

// Listen for when the client connects via socket.io-client
io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);
});

server.listen(4000, () => console.log("Server is running on port 4000"));
