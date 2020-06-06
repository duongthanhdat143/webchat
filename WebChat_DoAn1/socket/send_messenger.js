module.exports=(socket,io)=>{
	socket.on("send_messenger",(data)=>{
		var arrSocketReceiver=Object.values(io.sockets.sockets).filter(curVal=>{
			return (curVal.user==data.receiver);
		}).map(i=>i.id);
		arrSocketReceiver.forEach(element => {
			io.to(element).emit("receive_messenger",data);
		});
	});
};