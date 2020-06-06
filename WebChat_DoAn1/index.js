var express = require("express");
var app = express();
var expressLayouts = require('express-ejs-layouts');

var RouteDangKy=require("./routers/routeDangKy");
var RouteDangNhap=require("./routers/routeDangNhap");
var RouteDangXuat=require("./routers/routeDangXuat");
var RouteMain=require("./routers/routeMain");
var RouteDemo=require("./routers/routeDemo");
var RouteProfile=require("./routers/routeProfile");
var RouteTimNguoi=require("./routers/routeTimNguoi");


var server=require("http").Server(app);
var io=require("socket.io")(server);



// app use
app.use(express.static("public"));
app.use(expressLayouts);
app.use("/dangky",RouteDangKy);
app.use("/dangnhap",RouteDangNhap);
app.use("/dangxuat",RouteDangXuat);
app.use("/demo",RouteDemo);
app.use("/trang-ca-nhan",RouteProfile);
app.use("/tim-nguoi",RouteTimNguoi);
app.use("/",RouteMain);



//app set
app.set("view engine","ejs");
app.set("views","./views");
app.set('layout','MasterPage');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


require('./socket/socket').setIO(io);
module.exports.SocketIO=io;

server.listen(3000,()=>{
	console.log('server đang lắng nghe');
});