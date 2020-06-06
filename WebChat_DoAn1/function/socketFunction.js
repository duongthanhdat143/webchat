var friendsModel=require('../models/friendsModel');


module.exports.findSocketFriends=async(socket,io,id)=>{
	var arrayFriends=await friendsModel.findFriendsByCurUser(id);
	var arrayFriendsID=arrayFriends.map(i=>i.ID);
	var arraySocketFriends=Object.values(io.sockets.sockets).filter(curVal=>{
		return arrayFriendsID.includes(curVal.user);
	}).map(i=>i.id);
	return arraySocketFriends;
};