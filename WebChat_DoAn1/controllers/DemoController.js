var usersModel=require('../models/usersModel');

var demo=async(req,res)=>{
	res.render('demo',{layout:false});
};
var socketVSajax=(req,res)=>{
	var socketID=req.query.socketID;
	var SocketIO=require('../socket/socket.js').SocketIO();
	SocketIO.sockets.sockets[socketID].user='doanthanhhien';
	var b=SocketIO.sockets.sockets[socketID];
	console.log(b);
	res.send(socketID);
};

module.exports.demo=demo;
module.exports.socketVSajax=socketVSajax;