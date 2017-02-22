require.config({
	// baseUrl:"../js",
	shim:{
		'reg':['jquery','cookiebase'],
		'login':['jquery','cookiebase']
	},
	paths:{
		'jquery':'jquery-1.12.3',
		'reg':'reg',
		'template':'template',
		'cookiebase':'cookiebase',
		'login':'login'
	}
})
console.log("app")
require(['jquery','reg','login'],function($,reg,login){
	var path = location.pathname;
	console.log(path)
	if(path == "/VIP/reg/"){
		reg.init();
	}else if(path == "/VIP/login/"){
		login.init();
	}
	else{

	}
})