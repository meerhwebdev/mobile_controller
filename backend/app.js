const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");

const app = express();

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});
// Routes
app.get("/", (req, res) => {
  return res.send("Mobile Controller");
});

// All socket connection
io.on("connection", (socket) => {
  console.log("Player connected");
  // Mobile controller connection
  socket.on("move", (direction) => {
    console.log(`Move ${direction}`);
    io.emit("move", direction);
  });

  socket.on("disconnect", () => {
    console.log("Player disconnected");
  });
});

const Port = process.env.PORT || 3001;
server.listen(Port, () => {
  console.log(`Listening on port: ${Port}`);
});
