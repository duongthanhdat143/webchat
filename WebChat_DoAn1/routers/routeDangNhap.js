var express=require("express");
var routes=express.Router();
var DangNhapController=require('../controllers/DangNhapController');
var bodyParser=require('body-parser');
var session=require('../Sessions/sessions');


routes.use(session);
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({extended:true}));


routes.get('/',DangNhapController.showDangNhap);

routes.post('/',DangNhapController.postDangNhap);


module.exports=routes;