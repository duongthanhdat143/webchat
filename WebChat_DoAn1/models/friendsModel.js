var connectModel=require('./connectModel');

var findFriendsByCurUser=async(id)=>{
	var query=`LIST_FRIEND '${id}'`;
	var queryArr=[query];
	var resultQuery=await connectModel.Connect(queryArr);
	return(resultQuery[0].recordset);
};

module.exports.findFriendsByCurUser=findFriendsByCurUser;