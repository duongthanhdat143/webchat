var messageModel=require('../models/messageModel');


module.exports=(socket,io)=>{
	socket.on("open_chatbox",async(data)=>{
        var receiver=data.receiver;
        var timeShow=(new Date(data.timeShow)).toISOString();
        var sender=socket.user;
        var mes=await messageModel.GetMesIsSeenAtThatTime(receiver,sender,timeShow);
        var arrSocketReceiver=Object.values(io.sockets.sockets).filter(curVal=>{
			return (curVal.user==receiver);
        }).map(i=>i.id);
        arrSocketReceiver.forEach(curVal=>{
            io.to(curVal).emit("is_opened_chatbox",{MesIsSeen:mes,receiverID:sender});
        });
	});
};