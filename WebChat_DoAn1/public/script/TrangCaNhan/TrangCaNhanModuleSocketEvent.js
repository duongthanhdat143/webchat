function connect(){
	var queryString="userID="+user.ID;
	return io.connect("http://localhost:3000",{query:queryString});
}


function NhanTinNhan(data){
    var idConver=data.dataReceiveMes.CONVERID;
    var lastMes=data.dataReceiveMes.NOIDUNG;
    var avatarSender=data.dataReceiveMes.AVATAR;
    var htmlNewConver=newMesNotSeenAdd({idConver:idConver,lastMes:lastMes,avatarSender:avatarSender});
    AddNewMesNotSeen(htmlNewConver,idConver);
}