var usersModel=require('../models/usersModel');
var socketFunction=require('../function/socketFunction');


module.exports=(socket,io)=>{
	socket.on("set_connect",async(data)=>{
		socket.user=data.id;
		var resultChangeLastTime=await usersModel.updateLastTimeUser(data.id,null);
		var arraySocketFriends=await socketFunction.findSocketFriends(socket,io,data.id);
		arraySocketFriends.forEach(function(curVal){
			io.to(curVal).emit("danghoatdong",data.id);
		});
	});
};