require.config({
	// baseUrl:"../js",
	// shim:{
	// 	'reg':['jquery','cookiebase'],
	// 	'login':['jquery','cookiebase'],
	// 	'index':['jquery','cookiebase','top','floor'],
	// 	'top':['jquery','cookiebase','template'],
	// 	'banner':['jquery'],
	// 	'floor':['jquery','template'],
	// 	'list':['jquery','top','template'],
	// 	'detail':['jquery','template'],
	// 	'aside':['jquery','template'],
	// 	'car':['jquery','template']
	// },
	paths:{
		'jquery':'jquery-1.12.3',
		'template':'template',
		'cookiebase':'cookiebase',
		'reg':'reg',
		'login':'login',
		'index':'index',
		'top':'./index/top',
		'banner':'./index/banner',
		'floor':'./index/floor',
		'list':'list',
		'detail':'detail',
		'aside':'aside'
		
	}
})
require(['jquery','reg','login','index','list','detail'],function($,reg,login,index,list,detail){
	var path = location.pathname;
	console.log(path)
	if(path == "/VIP/reg/index.html"){
		reg.init();
	}else if(path == "/VIP/login/index.html"){
		login.init();
	}else if(path == "/VIP/index/index.html"){
		index.init();
	}else if(path == "/VIP/list/index.html"){
		list.init();
	}else if(path == "/VIP/detail/index.html"){
		detail.init();
	}else if(path == "/VIP/car/index.html"){
		car.init();
	}
	else{

	}
})