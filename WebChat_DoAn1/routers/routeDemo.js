var express=require("express");
var routes=express.Router();
var DemoController=require('../controllers/DemoController');

routes.get('/',DemoController.demo);
routes.get('/socketVSajax',DemoController.socketVSajax);

module.exports=routes;