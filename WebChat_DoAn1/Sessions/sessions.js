var session=require('express-session');
var MSSQLStore = require('connect-mssql')(session);
var configModel=require('../models/configModel');


var Session=session
	(
		{ secret: 'webchat',
		  cookie: { maxAge: 1000*60*1,httpOnly:false },
		  saveUninitialized:false,
		  resave:false,
		  store:new MSSQLStore(configModel.configDB,configModel.optionSession)
		}
	);

module.exports=Session;