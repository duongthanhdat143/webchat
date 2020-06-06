var mainFunct=require('../function/Main');
var usersModel=require('../models/usersModel');
var conversationsModel=require('../models/conversationsModel');
var messageModel=require('../models/messageModel');


var showMain=async(req,res)=>{
	var id=req.session.userID;
	if(id==undefined)
		return res.redirect('/dangnhap');
	expireTime=req.session.cookie._expires;
	var curUser=await usersModel.findUsersByID(id);
	var data=await mainFunct.showFriendsAndConvers(id);
	res.render('Main',{layout:'MasterPage',
					curUser:curUser,
					friends:data[0],
					convers:data[1],
					conversNotSeen:[],
					expireTime:expireTime});
};


var getConversationByConverID=async(req,res)=>{
	var converID=req.query.converID;
	var timeShow=(new Date(req.query.timeShow)).toISOString();
	var conversation=await conversationsModel.getContentByConverID(converID,timeShow);
	res.json({conversation:conversation,result:true});
};


var sendMes=async(req,res)=>{
	var owner=req.session.userID;
	var receiver=req.query.receiver;
	var content=req.query.content;
	var timeSend=req.query.timeSend.replace('T',' ').replace('Z','');
	var converID=req.query.converID;
	var newMesSendToReceive=await messageModel.sendMes(owner,receiver,content,timeSend,converID);
	if(newMesSendToReceive[0].TYPESEND==true)
		res.json({owner:newMesSendToReceive[0],receiver:newMesSendToReceive[1]});
	else
		res.json({owner:newMesSendToReceive[1],receiver:newMesSendToReceive[0]});
};


var getConversationByReceiver=async(req,res)=>{
	var owner=req.session.userID;
	var receiver=req.query.receiver;
	var timeShow=(new Date(req.query.timeShow)).toISOString();
	var conversation_infor=await conversationsModel.getContentConverByOwnerReceiver(owner,receiver,timeShow);
	res.json({conversation:conversation_infor.conversationContent,
				converID:conversation_infor.conversationID,
				result:true});
};


module.exports.showMain=showMain;
module.exports.getConversationByConverID=getConversationByConverID;
module.exports.sendMes=sendMes;
module.exports.getConversationByReceiver=getConversationByReceiver;