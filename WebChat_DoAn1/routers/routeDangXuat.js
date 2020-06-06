var express=require("express");
var routes=express.Router();
var DangXuatController=require('../controllers/DangXuatController');
var session=require('../Sessions/sessions');

routes.use(session);


routes.post('/',DangXuatController.DangXuat);


module.exports=routes;