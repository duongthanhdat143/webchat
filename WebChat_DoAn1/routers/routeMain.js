var express=require("express");
var routes=express.Router();
var session=require('../Sessions/sessions');
var MainController=require('../controllers/MainController');


routes.use(session);


routes.get('/',MainController.showMain);
routes.get('/getConversationByConverID',MainController.getConversationByConverID);
routes.get('/sendMes',MainController.sendMes);
routes.get('/getConversationByReceiver',MainController.getConversationByReceiver);


module.exports=routes;