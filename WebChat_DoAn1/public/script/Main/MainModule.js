function setKhungChat(conver){
	$('#AnhNguoiChat img').attr("src",conver.image);
	$('#TenNguoiChat').html(conver.name);
	$('#NoiDungChat').html('<h3 style="color:red;">Đang tải dữ liệu...</h3>');
	$('#HeaderChatBox #receiverID').html(conver.receiverID);
	if($('#HeaderChatBox #receiverID').html()==''){
		$('#inputMes').attr('disabled',true);
		$('#Gui').attr('disabled',true);
	}
	else{
		$('#inputMes').attr('disabled',false);
		$('#Gui').attr('disabled',false);
	}
}


function showConversationByConverID(conver,socket){
	setKhungChat(conver);
	var timeShow=new Date();
	$('#HeaderChatBox #ConverID').html(conver.id);
	$.ajax({
		url:'/getConversationByConverID',
		data:{converID:conver.id,timeShow:timeShow},
		type:'GET',
		success:function(data){
			if(data.result==false) return;
			var listMes=data.conversation;
			$('.conversation#'+xulySelectorID(conver.id)).css('color','black');
			$('#NoiDungChat').html('');
			listMes.forEach(function(curVal){
				var html=NewMesAdd(curVal);
				AddMes(html);
			});
			socket.emit("open_chatbox",{receiver:conver.receiverID,timeShow:timeShow});
		}
	});
}


function showConversationByReceiver(receiver,socket){
	setKhungChat(receiver);
	$('#HeaderChatBox #ConverID').html(receiver.id);
	var timeShow=new Date();
	$.ajax({
		url:'/getConversationByReceiver',
		data:{receiver:receiver.receiverID,timeShow:timeShow},
		type:'GET',
		success:function(data){
			if(data.result==false) return;
			if($('#HeaderChatBox #receiverID').html()==receiver)
				$('#HeaderChatBox #ConverID').html(data.converID);
			$('#NoiDungChat').html('');
			if(data.converID=='') return;
			var listMes=data.conversation;
			$('.conversation#'+xulySelectorID(data.converID)).css('color','black');
			listMes.forEach(function(curVal){
				var html=NewMesAdd(curVal);
				AddMes(html);
			});
			socket.emit("open_chatbox",{receiver:receiver.receiverID,timeShow:timeShow});
		}
	});
}


function xulyContent(content){
	var result=content.replace('\n','<br>').trim();
	return result;
}

function xulySelectorID(id){
	var result=id.replace(/_/g,'\\_')
				.replace(/-/,'\\-') 
				.replace(/:/g,'\\:')
				.replace(/\./g,"\\.");
	return result;
}

function GuiMes(ConverID,content,receiver,timeSend,MesID,socket){
	$.ajax({
		url:'/sendMes',
		data:{content:content,receiver:receiver,timeSend:timeSend,converID:ConverID},
		type:'GET',
		success:function(data){
			var selector0='#NoiDungChat #'+xulySelectorID(MesID)+' #tgXem';
			$(selector0).html('Đã gửi');
			if(data.owner.CONVERID!=$('#HeaderChatBox #ConverID').html() && 
			$('#HeaderChatBox #receiverID').html()==receiver){
				$('#HeaderChatBox #receiverID').html(data.owner.CONVERID);
				$('#NoiDungChat #'+xulySelectorID(MesID)).attr('id',data.owner.MESID);
			}
			var newConver={id:data.owner.CONVERID,
							avatar:data.owner.AVATAR,
							receiver:data.owner.RECEIVER,
							lastMes:content};
			RemoveConversation(data.owner.CONVERID);
			AddConversation(NewConversation(newConver));
			socket.emit("send_messenger",{idSendMes:data.owner.MESID,
											receiver:data.owner.RECEIVER,
											dataReceiveMes:data.receiver});
		}
	});
}








