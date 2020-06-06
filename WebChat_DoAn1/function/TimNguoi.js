var connectModel =require('../models/connectModel');

var showTimNguoi=async(id,idFind)=>{
    var queryFindUser=`SELECT*FROM USERS WHERE ID='${id}'`;
    var queryFindIdFind=`SELECT*FROM USERS WHERE ID='${idFind}'`;
    var queryFindFriendByIdFind=`LIST_FRIEND '${idFind}'`;
    var queryFindConvers=`LIST_CONVERS '${id}'`;
    var queryArr=[queryFindUser,queryFindIdFind,queryFindFriendByIdFind,queryFindConvers];
    var data=await connectModel.Connect(queryArr);
    var curUser=data[0].recordset[0];
    if((data[1].recordset).length==0) return 'CannotFind';
    var peopleFind=data[1].recordset[0];
    var friendByPeopleFind=data[2].recordset;
    var convers=data[3].recordset;
    var friendByPeopleFindWithoutCurUser=friendByPeopleFind.filter(function(curVal){
        return (curVal.ID!=id);
    });
    var conversNotSeen=convers.filter(function(curVal){
        return (curVal.OWNERSEEN==false)
    });
    return [curUser,peopleFind,friendByPeopleFindWithoutCurUser,conversNotSeen];
}


module.exports.showTimNguoi=showTimNguoi;