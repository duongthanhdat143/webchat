
$(document).ready(function(){
	setMasterPage();
	
	var socket=connect();
	SocketEvent(socket);

	$('#NoiDungChat').scrollTop($('#NoiDungChat')[0].scrollHeight-$('NoiDungChat').innerHeight());

	$('#sendMes #icon').click(function(){
		var status=$('#sendMes #listIcon').css('display');
		if(status=='none')
			$('#sendMes #listIcon').css('display','block');
		else
			$('#sendMes #listIcon').css('display','none');
	});
	$('#sendMes #icon #listIcon div').click(function(){
		var iconName=$(this).html();
		var valueInputMes=$('#sendMes #inputMes').val();
		valueInputMes=valueInputMes+iconName;
		$('#sendMes #inputMes').val(valueInputMes);
	})

	$('#DsTroChuyen').on("click",".conversation",function(){
		var headerchatbox={id:$(this).attr('id'),
							name:$(this).find('#thongtin #ten').html(),
							image:$(this).find('#hinhanh img').attr('src'),
							receiverID:$(this).find('#thongtin #receiverID').html()};
		showConversationByConverID(headerchatbox,socket);
	});


	$('.friend').click(function(){
		var headerchatbox={id:'',
							name:$(this).attr('id'),
							image:$(this).find('#hinhanh img').attr('src'),
							receiverID:$(this).attr('id')};
		showConversationByReceiver(headerchatbox,socket);
	});


	$('#Gui').click(function(){
		var nguoi_nhan=$('#HeaderChatBox #receiverID').html();
		var noidung_gui=$('#inputMes').val();
		var converID=$('#HeaderChatBox #ConverID').html();
		var timeSend=(new Date()).toISOString();
		$('#inputMes').val('');
		if(noidung_gui=='') return;
		noidung_gui=xulyContent(noidung_gui);
		converID=(converID!='')?converID:user.ID+'_'+timeSend;
		$('#HeaderChatBox #ConverID').html(converID);
		var newMesSending={MESID:converID+'_'+timeSend,TIMESEND:timeSend,NOIDUNG:noidung_gui,
							TIMERECEIVE:'Đang gửi...',
							TYPESEND:true};
		AddMes(NewMesAdd(newMesSending));
		GuiMes(converID,noidung_gui,nguoi_nhan,timeSend,newMesSending.MESID,socket);
	});


	setTimeout(()=>{
		document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		window.location.replace('http://localhost:3000/dangnhap');
	},expireTime.getTime()-Date.now());
});