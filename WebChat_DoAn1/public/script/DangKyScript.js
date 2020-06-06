$(document).ready(function(){
	$('#formDangKy input[name="username"]').blur(function(){
		var usrname=$(this).val();
		if(usrname=="") return;
		$.get('/dangky/ktTonTaiUsername',{username:usrname},function(data){
			if(data==false){
				$('#ThongBaoUsername').html("username đã được sử dụng");
			}
		});
	});
	$('#formDangKy input[name="username"]').focus(function(){
		$('#ThongBaoUsername').html("");
	});
	$('#formDangKy input[name="re_password"]').focus(function(){
		$('#ThongBaoRePass').html("");
	});
	$('#formDangKy input[name="password"]').blur(function(){
		if($(this).val()==""){
		 	$('#formDangKy input[name="re_password"]').attr("disabled",true);
		 	$('#formDangKy input[name="re_password"]').val("");
		}
		else $('#formDangKy input[name="re_password"]').attr("disabled",false);
			
	});
	$('#formDangKy input[name="re_password"]').blur(function(){
		if($(this).val()!=$('#formDangKy input[name="password"]').val()){
			$('#ThongBaoRePass').html('Nhập lại mật khẩu không đúng');
		}
	});
	$('#formDangKy').submit(function(){
		if($('#ThongBaoUsername').html()!=""||$('#ThongBaoRePass').html()!="") return false;
		return true;
	});
});