module.exports.DangXuat=(req,res)=>{
	req.session.destroy((err)=>{
		res.clearCookie('connect.sid', { path: '/' });
		res.redirect('/dangnhap');
	});
};