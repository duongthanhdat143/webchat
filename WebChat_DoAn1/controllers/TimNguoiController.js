var usersModel=require('../models/usersModel');
var friendsModel=require('../models/friendsModel');
var timNguoiFunct=require('../function/TimNguoi');


var TimNguoi=async(req,res)=>{
    var id=req.session.userID;
	if(id==undefined)
		return res.redirect('/dangnhap');
    var idNguoi=req.params.id;
    var dataShowTimNguoi=await timNguoiFunct.showTimNguoi(id,idNguoi);
    if(dataShowTimNguoi=='CannotFind') return res.send('Không tìm thấy người này');
    var curUser=dataShowTimNguoi[0];
    var nguoi=dataShowTimNguoi[1];
    var friendsWithoutcurUser=dataShowTimNguoi[2];
    var conversNotSeen=dataShowTimNguoi[3];
    res.render('TrangTimNguoi',{layout:'MasterPage',
                                nguoi:nguoi,
                                friends:friendsWithoutcurUser,
                                curUser:curUser,
                                conversNotSeen:conversNotSeen});
}


var TimNguoiLikeID=async(req,res)=>{
    var idUser=req.session.userID;
    if(idUser==undefined) return res.send('sessionTimeout');
    var idFind=req.query.idFind;
    var userfind=await usersModel.findUsersLikeID(idFind);
    var userfindWithoutCurUser=userfind.filter(function(curVal){
        return (curVal.ID!=idUser);
    })
    res.json(userfindWithoutCurUser);
}

module.exports.TimNguoi=TimNguoi;
module.exports.TimNguoiLikeID=TimNguoiLikeID;