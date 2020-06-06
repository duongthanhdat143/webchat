var connectModel =require('../models/connectModel');

var showProfile=async(id)=>{
    var queryFindUser=`SELECT*FROM USERS WHERE ID='${id}'`;
    var queryFindFriends=`LIST_FRIEND '${id}'`;
    var queryFindConvers=`LIST_CONVERS '${id}'`;
    var queryArr=[queryFindUser,queryFindFriends,queryFindConvers];
    var data=await connectModel.Connect(queryArr);
    var curUser=data[0].recordset[0];
    var friends=data[1].recordset;
    var convers=data[2].recordset;
    var conversNotSeen=convers.filter(function(curVal){
        return (curVal.OWNERSEEN==false)
    });
    return [curUser,friends,conversNotSeen];
}


module.exports.showProfile=showProfile;