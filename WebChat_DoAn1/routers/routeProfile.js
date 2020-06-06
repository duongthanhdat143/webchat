var express=require("express");
var routes=express.Router();
var bodyParser=require('body-parser');
var session=require('../Sessions/sessions');
var ProfileController=require('../controllers/ProfileController');


routes.use(session);
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({extended:true}));


routes.get('/',ProfileController.showProfile);
routes.post('/changePass',ProfileController.changePass);



module.exports=routes;