var messageModel=require('../models/messageModel');


module.exports=(socket,io)=>{
	socket.on("thong_bao_mes_da_xem",async(data)=>{
		var arrSocketReceiver=Object.values(io.sockets.sockets).filter(curVal=>{
			return (curVal.user==data.sender);
        }).map(i=>i.id);

        var time=(new Date(data.time)).toISOString();
        var resultSeenMes=await messageModel.mesSeen(data.mesIDSend,data.mesIDReceive,time);

        arrSocketReceiver.forEach(element => {
            io.to(element).emit("thongbao_receiver_seen",{mesIsSeen:data.mesIDSend,time:time});
        });
	});
};