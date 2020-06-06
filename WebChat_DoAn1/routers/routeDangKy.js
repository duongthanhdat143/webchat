var express=require("express");
var routes=express.Router();
var DangKyController=require('../controllers/DangKyController');
var session=require('../Sessions/sessions');
var bodyParser=require('body-parser');



routes.use(session);
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({extended:true}));


routes.get('/',DangKyController.showDangKy);

routes.post('/',DangKyController.postDangKy);

routes.get('/ktTonTaiUsername',DangKyController.ktTonTaiUsername);


module.exports=routes;
