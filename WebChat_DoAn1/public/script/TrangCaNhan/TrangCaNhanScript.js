$(document).ready(function(){

	setMasterPage();

	var socket=connect();
	SocketEvent(socket);

	$('#changeAvatar').click(function(){
		$('#ThayDoiAnhDaiDien').css('display','block');
	});
	$('#ThayDoiAnhDaiDien form #Avatar').change(function(){
		var hinh=this.files[0];
    	var url=URL.createObjectURL(hinh);
    	$('#ThayDoiAnhDaiDien #AvatarPreview').attr('src',url);
	});
	$('#ThayDoiAnhDaiDien #formThayDoiAvatar #AvatarPreview').on('load',function(){
		URL.revokeObjectURL(this.src);
	});
	$('#ThayDoiAnhDaiDien #formThayDoiAvatar #Cancel').click(function(){
		$('#ThayDoiAnhDaiDien').css('display','none');
	});
	
	
	
	$('#changePass').click(function(){
		$('#ThayDoiMatKhau').css('display','block');
	});
	$('#ThayDoiMatKhau #formThayDoiPass #Cancel').click(function(){
		$('#ThayDoiMatKhau').css('display','none');
		$('#formThayDoiPass #ThongBao').html('');
		$('#formChangePass input[name="curPass"]').val('');
		$('#formChangePass input[name="newPass"]').val('');
		$('#formChangePass input[name="previewPass"]').val('');
	});
	$('#formChangePass input[name="submitNewPass"]').click(function(){
		var oldpass= $('#formChangePass input[name="curPass"]').val();
		var newpass=$('#formChangePass input[name="newPass"]').val();
		var previewpass=$('#formChangePass input[name="previewPass"]').val();
		if(oldpass==''||newpass==''||previewpass==''){
			$('#formThayDoiPass #ThongBao').html('Phải nhập đầy đủ thông tin');
			return false;
		}
		if(newpass!=previewpass){
			$('#formThayDoiPass #ThongBao').html('Mật khẩu nhập lại không trùng khớp với mật khẩu mới');
			return false;
		}
		$.post('trang-ca-nhan/changePass',{curPass:oldpass,newPass:newpass},function(data){
			if(data.result==false){
				$('#formThayDoiPass #ThongBao').html(data.note);
				return;
			}
			alert(data.note);
			window.location.replace('http://localhost:3000/trang-ca-nhan');
		});
	});
});