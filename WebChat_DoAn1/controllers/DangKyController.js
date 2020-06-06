var usersModel=require('../models/usersModel');



module.exports.showDangKy=(req,res)=>{
	if(req.session.userID==undefined){
		return res.render('DangKy',{layout:false});
	}
	req.session.destroy((err)=>{
		res.render('DangKy',{layout:false});
	});
};

module.exports.ktTonTaiUsername=async(req,res)=>{
	var id=req.query.username;
	var checkExistID=await usersModel.checkExistID(id);
	if(checkExistID==true) res.json(false);
	else res.json(true);
};

module.exports.postDangKy=async(req,res)=>{
	var id=req.body.username;
	var pass=req.body.password;
	var result=await usersModel.CreateNewUsers(id,pass);
	if(result==true) res.redirect('/dangnhap');
	else res.render('DangKy',{layout:false});
};