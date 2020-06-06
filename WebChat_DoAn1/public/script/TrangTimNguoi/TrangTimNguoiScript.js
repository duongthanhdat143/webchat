$(document).ready(function(){

	setMasterPage();

	var socket=connect();
    SocketEvent(socket);
})