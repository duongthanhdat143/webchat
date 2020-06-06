function connect(){
	var queryString="userID="+user.ID;
	return io.connect("http://localhost:3000",{query:queryString});
}


function danghoatdong(id){
	var selector='#'+id+'.friend #thongtin #hoatdong';
	$(selector).html("đang hoạt động");
	$(selector).css("color","green");
}

function ngunghoatdong(data){
	var selector='#'+data.id+'.friend #thongtin #hoatdong';
	$(selector).html((new Date(data.lastTime)).toLocaleString());
	$(selector).css("color","red");
}

function NhanTinNhan(data,socket){
	console.log(data.dataReceiveMes.CONVERID);
	RemoveConversation(data.dataReceiveMes.CONVERID);
	var newConver={id:data.dataReceiveMes.CONVERID,
		avatar:data.dataReceiveMes.AVATAR,
		receiver:data.dataReceiveMes.RECEIVER,
		lastMes:data.dataReceiveMes.NOIDUNG};
	AddConversation(NewConversation(newConver));
	if($('#HeaderChatBox #receiverID').html()!=newConver.receiver){
		$('.conversation#'+xulySelectorID(newConver.id)).css('color','green');
		return;
	}
	if($('#HeaderChatBox #ConverID').html()!=newConver.id){
		$('#HeaderChatBox #ConverID').html(newConver.id);
	}
	var timeReceive=new Date();
	var newMesReceive={MESID:data.dataReceiveMes.MESID,TIMESEND:data.dataReceiveMes.TIMESEND,
						NOIDUNG:data.dataReceiveMes.NOIDUNG,
							TIMERECEIVE:timeReceive,
							TYPESEND:false};
	AddMes(NewMesAdd(newMesReceive));
	var sender=data.dataReceiveMes.RECEIVER;
	var mesIDSend=data.idSendMes;
	var mesIDReceive=data.dataReceiveMes.MESID;
	socket.emit('thong_bao_mes_da_xem',{sender:sender,
										mesIDSend:mesIDSend,
										mesIDReceive:mesIDReceive,
										time:timeReceive});
}

function IsOpenedChatBox(data){
	var mesIsSeen=data.MesIsSeen;
	if($('#HeaderChatBox #receiverID').html()!=data.receiverID) return;
	mesIsSeen.forEach(element => {
		var tgXem=(new Date(element.TIMERECEIVE)).toLocaleString();
		$('#NoiDungChat #'+xulySelectorID(element.MESID)+' #tgXem').html(tgXem);
	});
}

function ThongBaoMesSeen(data){
	var mesIsSeen=data.mesIsSeen;
	var time=(new Date(data.time)).toLocaleString();
	$('#NoiDungChat #'+xulySelectorID(mesIsSeen)+' #tgXem').html(time);
}