define(['jquery','cookiebase','top','banner','floor','aside'],function($,cookie,top,banner,floor,Aside){

	return {
		init:function(){
			//引入主页头部
			top.init(function(){
				$(document).scroll(function(){
					var scrollHeight = $(window).scrollTop();
					var header_top = $('.header_menu').position().top;
					
					if(scrollHeight >= 148){
						$('.header_menu').css({
							position:'fixed',
							top:0
						})
					}
					else{
						$('.header_menu').css({
							position:'absolute',
							top:148
						})
					}
				})				
			});

			//引入轮播图
			banner.init();
			//引入楼层
			floor.init();
			//引入侧边栏
			var aside =new Aside();
		}
	}
})
