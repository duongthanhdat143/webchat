$(document).ready(function(){
	$('#login form input[name="showPass"]').mousedown(function(){
		$('#login form input[name="password"]').attr("type","text");
		$('#login form input[name="password"]').css("margin-bottom","0px");
	});
	
	$('#login form input[name="showPass"]').mouseup(function(){
		$('#login form input[name="password"]').attr("type","password");	
	});

	$('#formDangNhap').submit(function(){
		var username=$('#login form input[name="username"]').val();
		var password=$('#login form input[name="password"]').val();
		if(username==''||password==''){
			$('#ThongBao').html('Phải nhập đầy đủ thông tin');
			return false;
		}
		return true;
	});
});