function SocketEvent(socket){
	socket.on("receive_messenger",data=>NhanTinNhan(data));
}