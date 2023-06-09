const io = require("socket.io")(3030); // pass port that we want server to run on ex.(3000) so creates port on 3000

io.on("connection", socket => {
	socket.emit("chat-message", "Hello World");
});
