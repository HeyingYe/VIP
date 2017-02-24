define(['jquery','cookiebase','top','banner','floor'],function($,cookie,top,banner,floor){

	return {
		init:function(){
			//引入主页头部
			top.init();
			//引入轮播图
			banner.init();
			//引入楼层
			floor.init();
		}
	}
})
