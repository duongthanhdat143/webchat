var usersModel=require('../models/usersModel');
var friendsModel=require('../models/friendsModel');
var profileFunct=require('../function/Profile');



var showProfile=async(req,res)=>{
  var id=req.session.userID;
	if(id==undefined)
    return res.redirect('/dangnhap');
  var dataShowProfile=await profileFunct.showProfile(id);
  var curUser=dataShowProfile[0];
  var friends=dataShowProfile[1];
  var conversNotSeen=dataShowProfile[2];
  res.render('TrangCaNhan',{layout:'MasterPage',
                                curUser:curUser,
                                friends:friends,
                                conversNotSeen:conversNotSeen});
}


var changePass=async(req,res)=>{
  var id=req.session.userID;
  if(id==undefined) return res.send({result:false,note:'Hết thời gian đăng nhập'});
  var oldpass=req.body.curPass;
  var newpass=req.body.newPass;
  var kq=await usersModel.updatePassByID(id,oldpass,newpass);
  if(kq.RESULT==true) return res.send({result:true,note:'Mật khẩu được thay đổi'});
  else return res.send({result:kq.RESULT,note:'Sai mật khẩu'});
}

module.exports.showProfile=showProfile;
module.exports.changePass=changePass;

