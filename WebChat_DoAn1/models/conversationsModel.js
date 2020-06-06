var connectModel=require('./connectModel');

var getContentByConverID=async(idConver,timeShow)=>{
	var time=timeShow.replace('T',' ').replace('Z','');
	var query=`GET_CONTENT_BY_CONVERID '${idConver}','${time}'`;
	var queryArr=[query];
	var resultQuery=await connectModel.Connect(queryArr);
	return resultQuery[0].recordset;
};

var getContentConverByOwnerReceiver=async(owner,receiver,timeShow)=>{
	var time=timeShow.replace('T',' ').replace('Z','');
	var query1=`GET_CONTENT_CONVER_BY_OWNER_RECEIVER '${owner}','${receiver}','${time}'`;
	var query2=`SELECT CONVERSID FROM CONVERSATION WHERE OWNER='${owner}' AND RECEIVER='${receiver}'`;
	var queryArr=[query1,query2];
	var resultQuery=await connectModel.Connect(queryArr);
	var conversationContent=resultQuery[0].recordset;
	var conversationID=(resultQuery[1].recordset[0]==undefined)?'':resultQuery[1].recordset[0].CONVERSID;
	return {conversationContent:conversationContent,conversationID:conversationID};
};




module.exports.getContentByConverID=getContentByConverID;
module.exports.getContentConverByOwnerReceiver=getContentConverByOwnerReceiver;