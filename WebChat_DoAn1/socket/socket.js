var setIO=(io)=>{
	io.on("connection",(socket)=>{
		require('./connect')(socket,io);
		require('./set_connect')(socket,io);
		require('./disconnect')(socket,io);
		require('./send_messenger')(socket,io);
		require('./open_chatbox')(socket,io);
		require('./thong_bao_mes_da_xem')(socket,io);
	});
};


var SocketIO=()=>{
	var result=require('../index').SocketIO;
	return result;
};

module.exports.setIO=setIO;
module.exports.SocketIO=SocketIO;