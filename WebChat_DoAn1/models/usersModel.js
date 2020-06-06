var connectModel=require('./connectModel');

var checkExistID=async(id)=>{
	var query=`SELECT COUNT(*) AS COUNT FROM USERS WHERE ID='${id}'`;
	var queryArr=[query];
	var resultQuery=await connectModel.Connect(queryArr);
	if(resultQuery[0].recordset[0].COUNT==0) return false;
	else return true;
};


var CreateNewUsers=async(id,pass)=>{
	var avatar='default.jpg';
	var lastTime=(new Date()).toISOString().replace('T',' ').replace('Z','');
	var query=`INSERT INTO USERS VALUES('${id}','${pass}','${avatar}','${lastTime}')`;
	var queryArr=[query];
	try{
		var resultQuery=await connectModel.Connect(queryArr);
		return true;
	}
	catch{
		return false;
	}
};


var findUsersByID=async(id)=>{
	var query=`SELECT * FROM USERS WHERE ID='${id}'`;
	var queryArr=[query];
	var resultQuery=await connectModel.Connect(queryArr);
	return resultQuery[0].recordset[0];
};


var updateLastTimeUser=async(id,newLastTime)=>{
	var query=undefined;
	if(newLastTime!=null) query=`UPDATE USERS SET LASTTIME='${newLastTime}' WHERE ID='${id}'`;
	else query=`UPDATE USERS SET LASTTIME=${newLastTime} WHERE ID='${id}'`;
	var queryArr=[query];
	var resultQuery=await connectModel.Connect(queryArr);
	return(resultQuery[0].rowsAffected[0]==1);
};


var updatePassByID=async(id,oldpass,newpass)=>{
	var query=`CHANGE_PASS_BYID '${id}','${oldpass}','${newpass}'`;
	var queryArr=[query];
	var resultQuery=await connectModel.Connect(queryArr);
	return resultQuery[0].recordset[0];
}


var findUsersLikeID=async(idFind)=>{
	var query=`SELECT*FROM USERS WHERE ID LIKE ('%${idFind}%')`;
	var queryArr=[query];
	var resultQuery=await connectModel.Connect(queryArr);
	return resultQuery[0].recordset;
}


module.exports.checkExistID=checkExistID;
module.exports.CreateNewUsers=CreateNewUsers;
module.exports.findUsersByID=findUsersByID;
module.exports.updateLastTimeUser=updateLastTimeUser;
module.exports.updatePassByID=updatePassByID;
module.exports.findUsersLikeID=findUsersLikeID;