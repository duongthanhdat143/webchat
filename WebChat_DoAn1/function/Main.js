var connectModel =require('../models/connectModel');

var showFriendsAndConvers=async(id)=>{
	var queryFindFriends=`LIST_FRIEND '${id}'`;
	var queryFindConvers=`LIST_CONVERS '${id}'`;
	var queryArr=[queryFindFriends,queryFindConvers];
	var data=await connectModel.Connect(queryArr);
	var friends=data[0].recordset;
	var convers=data[1].recordset;
	return [friends,convers];
};


module.exports.showFriendsAndConvers=showFriendsAndConvers;