const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 3001;
let users = [];

app.get('/', (req, res) => res.send('Fire Zoom Back-End'));

const addUser = (userName, roomId) => {
	users.push({ userName, roomId });
};

const removeUser = (userName) => {
	users = users.filter((user) => user.userName !== userName);
};

const getRoomUsers = (roomId) => {
	return users.filter((user) => user.roomId === roomId);
};

io.on('connection', (socket) => {
	socket.on('join-room', ({ roomId, userName }) => {
		if (roomId && userName) {
			socket.join(roomId);

			addUser(userName, roomId);

			socket.to(roomId).emit('user-connected', userName);

			io.to(roomId).emit('all-users', getRoomUsers(roomId));
		}

		socket.on('disconnect', () => {
			socket.leave(roomId);

			// User leave room
			removeUser(userName);

			io.to(roomId).emit('all-users', getRoomUsers(roomId));
		});
	});
});

server.listen(port, () => console.log(`Fire Zoom on port: ${port}`));
