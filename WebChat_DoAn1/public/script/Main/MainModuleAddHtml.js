function NewMesAdd(mes){
	var idMes=mes.MESID;
	var timeSend= (new Date(mes.TIMESEND)).toLocaleString();
	var noidung=mes.NOIDUNG;
	var timeReceive=undefined;
	if(mes.TIMERECEIVE==null) timeReceive='Đã gửi';
	else if(mes.TIMERECEIVE!='Đang gửi...') timeReceive=(new Date(mes.TIMERECEIVE)).toLocaleString();
			else timeReceive=mes.TIMERECEIVE;
	var typesend=(mes.TYPESEND==true)?'mesGui':'mesNhan';
	var html=`<div class="${typesend}" id="${idMes}">
					<div id="tgGui">${timeSend}</div>
					<div id="mes">${noidung}</div>
					<div id="tgXem">${timeReceive}</div>
			  </div>`;
	return html;
}

function AddMes(htmlMes){
	$('#NoiDungChat').append(htmlMes);
	$('#NoiDungChat').scrollTop($('#NoiDungChat')[0].scrollHeight-$('#NoiDungChat').innerHeight());
}


function NewConversation(conversation){
	var idConver=conversation.id;
	var avatar=conversation.avatar;
	var receiver=conversation.receiver;
	var receiverID=conversation.receiver;
	var lastMes=conversation.lastMes.replace(/<br>/g,' ');
	var result=`<div class="conversation" id="${idConver}">
					<div id="hinhanh">
						<img src="/HinhAnh/${avatar}">
					</div>
					<div id="thongtin">
						<div id="receiverID" hidden="true">${receiverID}</div>
						<div id="ten">${receiver}</div>
						<div id="lastMes">${lastMes}</div>
					</div>
				</div>`;
	return result;
}


function AddConversation(htmlNewConver){
	$('#DsTroChuyen').prepend(htmlNewConver);
}

function RemoveConversation(idConver){
	var selector=xulySelectorID(idConver);
	$('.conversation#'+selector).remove();
}






