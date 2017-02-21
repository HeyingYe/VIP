require.config({
	baseUrl:"../js",
	shim:{
		'login':['jquery'],
	},
	paths:{
		'jquery':'jquery-1.12.3',
		'login':'login'
	}
})
require(['jquery','login'],function($,login){
	var path = location.pathname;
	console.log(path)
	if(path == "/yhy_pro/login/"){
		login.init();
	}else{

	}
})