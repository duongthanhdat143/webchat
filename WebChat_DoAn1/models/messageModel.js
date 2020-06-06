var connectModel=require('./connectModel');

var sendMes=async(owner,receiver,content,timeSend,converID)=>{
	var query=`SEND_MES '${owner}',${receiver},N'${content}','${timeSend}','${converID}'`;
	var queryArr=[query];
	var resultQuery=await connectModel.Connect(queryArr);
	return resultQuery[0].recordset;
};

var GetMesIsSeenAtThatTime=async(owner,receiver,timeReceive)=>{
	timeReceive=timeReceive.replace('T',' ').replace('Z','');
	var query=`GETMES_IS_SEEN_AT_THATTIME '${owner}','${receiver}','${timeReceive}'`;
	var queryArr=[query];
	try{
		var resultQuery=await connectModel.Connect(queryArr);
		return resultQuery[0].recordset;
	}
	catch{
		return false;
	}
}

var mesSeen=async(mesIDSend,mesIDReceive,time)=>{
	time=time.replace('T',' ').replace('Z','');
	var query1=`UPDATE MESSAGE SET TIMERECEIVE='${time}' WHERE MESID='${mesIDSend}'`;
	var query2=`UPDATE MESSAGE SET TIMERECEIVE='${time}' WHERE MESID='${mesIDReceive}'`;
	var queryArr=[query1,query2];
	try{
		var resultQuery=await connectModel.Connect(queryArr);
		return true;
	}
	catch{
		return false;
	}
}


module.exports.sendMes=sendMes;
module.exports.GetMesIsSeenAtThatTime=GetMesIsSeenAtThatTime;
module.exports.mesSeen=mesSeen;