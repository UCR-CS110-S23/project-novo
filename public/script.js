// client side javscript
const socket = io("http://localhost:3030");

socket.on("chat-message", data => {
	console.log(data);
});
