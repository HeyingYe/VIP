require.config({
	// baseUrl:"../js",
	shim:{
		'reg':['jquery'],
	},
	paths:{
		'jquery':'jquery-1.12.3',
		'reg':'reg',
		'template':'template'
	}
})
require(['jquery','reg'],function($,reg){
	var path = location.pathname;
	console.log(path)
	if(path == "/VIP/reg/"){
		reg.init();
	}else{

	}
})