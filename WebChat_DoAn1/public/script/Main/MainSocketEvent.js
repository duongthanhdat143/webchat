function SocketEvent(socket){
	socket.on("danghoatdong",id=>danghoatdong(id));
	socket.on("ngunghoatdong",data=>ngunghoatdong(data));
	socket.on("receive_messenger",data=>NhanTinNhan(data,socket));
	socket.on("is_opened_chatbox",data=>IsOpenedChatBox(data));
	socket.on("thongbao_receiver_seen",data=>ThongBaoMesSeen(data));
}