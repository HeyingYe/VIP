define(['jquery','cookiebase','top','banner'],function($,cookie,top,banner){

	return {
		init:function(){
			//引入主页头部
			top.init();
			//引入轮播图
			banner.init();
		}
	}
})
