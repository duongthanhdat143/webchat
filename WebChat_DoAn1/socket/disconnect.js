var userModel=require('../models/usersModel');
var socketFunction=require('../function/socketFunction');


module.exports=(socket,io)=>{
	socket.on("disconnect",async ()=>{
		console.log(socket.id+' da ngat ket noi');
		var datenow=new Date();
		var datenowSQL=datenow.toISOString().replace('T',' ').replace('Z','');
		var ConnSameName=[];
		ConnSameName=Object.values(io.sockets.sockets).filter((curVal)=>{
			return curVal.name==socket.user;
		});
		if(ConnSameName.length!=0) return;
		var re=await userModel.updateLastTimeUser(socket.user,datenowSQL);
		var arraySocketFriends=await socketFunction.findSocketFriends(socket,io,socket.user);
		arraySocketFriends.forEach(function(curVal){
			io.to(curVal).emit("ngunghoatdong",{id:socket.user,lastTime:datenow});
		});
	});
};