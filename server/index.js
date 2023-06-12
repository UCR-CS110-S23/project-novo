const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

messages = [];

io.on("connection", socket => {
	console.log(`User connected: ${socket.id}`);

	socket.on("join_room", data => {
		socket.join(data);
	});

	socket.on("send_message", data => {
		const messageData = {
			id: socket.id,
			message: data.message,
		};

		messages.push(messageData);

		socket.to(data.room).emit("receive_message", data);
	});

	socket.on("disconnect", () => {
		console.log(`User disconnected: ${socket.id}`);
		socket.broadcast.emit("user-disconnected", messages);
		messages = [];
	});
});

server.listen(3001, () => {
	console.log("Server is running!");
});
