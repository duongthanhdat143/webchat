var sql=require('mssql');
var configModel=require('./configModel');





var conn=async(queryArr)=>{
    var result=undefined;
    var promiseArr=[];
    await sql.connect(configModel.configDB);
    queryArr.forEach(function(curVal){
        var promise=sql.query(curVal);
        promiseArr.push(promise);
    });
    result=await Promise.all(promiseArr);
    await sql.close();
    return result;
};


module.exports.Connect=conn;
