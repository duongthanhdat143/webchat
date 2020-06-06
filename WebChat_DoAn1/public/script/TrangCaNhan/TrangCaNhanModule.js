function xulySelectorID(id){
	var result=id.replace(/_/g,'\\_')
				.replace(/-/,'\\-') 
				.replace(/:/g,'\\:')
				.replace(/\./g,"\\.");
	return result;
}