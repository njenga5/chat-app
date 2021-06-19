const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    socket.emit('message', data)
  });
});
server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
