var configDB = {
    user: "duongthanhdat",
    password: "duongthanhdat143",
    server: "localhost", // You can use 'localhost\\instance' to connect to named instance
    database: "WEBCHAT",
    port:1433,
    options:{
    	enableArithAbort:true,
    	textsize:2147483647
    },
};


var optionSession={
    table:'sessions',
    ttl:1000*20,
    autoRemove:'interval',
    autoRemoveInterval:1000,
    autoRemoveCallback:undefined,
    useUTC:true,
};

module.exports.optionSession=optionSession;
module.exports.configDB=configDB;