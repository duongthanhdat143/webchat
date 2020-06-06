var express=require("express");
var routes=express.Router();
var bodyParser=require('body-parser');
var session=require('../Sessions/sessions');
var TimNguoiController=require('../controllers/TimNguoiController');


routes.use(session);
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({extended:true}));


routes.get('/TimNguoilikeID',TimNguoiController.TimNguoiLikeID);
routes.get('/:id',TimNguoiController.TimNguoi);




module.exports=routes;