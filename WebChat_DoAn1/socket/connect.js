var usersModel=require('../models/usersModel');
var socketFunction=require('../function/socketFunction');


module.exports=async(socket,io)=>{
	console.log('co nguoi ket noi:'+socket.id);
	socket.user=socket.handshake.query.userID;
	var resultChangeLastTime=await usersModel.updateLastTimeUser(socket.user,null);
	var arraySocketFriends=await socketFunction.findSocketFriends(socket,io,socket.user);
	arraySocketFriends.forEach(function(curVal){
		io.to(curVal).emit("danghoatdong",socket.user);
	});
};