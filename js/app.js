require.config({
	// baseUrl:"../js",
	shim:{
		'reg':['jquery','cookiebase'],
	},
	paths:{
		'jquery':'jquery-1.12.3',
		'reg':'reg',
		'template':'template',
		'cookiebase':'cookiebase'
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