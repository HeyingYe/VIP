require.config({
	// baseUrl:"../js",
	shim:{
		'reg':['jquery','cookiebase'],
		'login':['jquery','cookiebase'],
		'index':['jquery','cookiebase']
	},
	paths:{
		'jquery':'jquery-1.12.3',
		'reg':'reg',
		'template':'template',
		'cookiebase':'cookiebase',
		'login':'login',
		'index':'index'
	}
})
require(['jquery','reg','login','index'],function($,reg,login,index){
	var path = location.pathname;
	console.log(path)
	if(path == "/VIP/reg/index.html"){
		reg.init();
	}else if(path == "/VIP/login/index.html"){
		login.init();
	}else if(path == "/VIP/index/index.html"){
		index.init();
	}
	else{

	}
})