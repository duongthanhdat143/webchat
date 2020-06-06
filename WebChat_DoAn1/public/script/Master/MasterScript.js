$(document).ready(function(){

	$('#TimKiem input[name="TimKiem"]').focus(function(){
		$('#TimKiem #filterTimKiem').show();
	});
	$('#TimKiem input[name="TimKiem"]').blur(function(){
		$('#TimKiem #filterTimKiem').hide();
	});
	$('#TimKiem input[name="TimKiem"]').keyup(function(event){
		var search=event.target.value;
		emptyFilterSearch();
		if(search=='') return;
		$.get('/tim-nguoi/TimNguoiLikeID',{idFind:search},function(data){
			if(data=='sessionTimeout') window.location.replace('http://localhost:3000/dangnhap');
			data.forEach(element => {
				var htmlUserFilterSearch=HtmlUserFilterSearch(element);
				showUserFilterSearchLikeID(htmlUserFilterSearch);
			});
		});
	});

	$('#Header #TinNhan').mouseover(function(){
		$('#Header #TinNhan #MesNotSeen').show();
	});
	$('#Header #TinNhan').mouseout(function(){
		$('#Header #TinNhan #MesNotSeen').hide();
	})
});
