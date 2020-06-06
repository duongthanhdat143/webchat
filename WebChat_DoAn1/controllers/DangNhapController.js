var usersModel=require('../models/usersModel');


module.exports.showDangNhap=(req,res)=>{
	if(req.session.userID!=undefined)
		return res.redirect('/');
	res.render('DangNhap',{layout:false,error:''});
};

module.exports.postDangNhap=async(req,res)=>{
	var id=req.body.username;
	var pass=req.body.password;
	var findUsersByID=await usersModel.findUsersByID(id);
	if(findUsersByID==undefined)
		return res.render('DangNhap',{layout:false,error:'Không tồn tại người dùng'});
	if(findUsersByID.PASS!=pass)
		return res.render('DangNhap',{layout:false,error:'Sai mật khẩu'});
	req.session.userID=await id;
	res.redirect('/');
};