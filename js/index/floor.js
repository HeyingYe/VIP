define(['jquery','template'],function($,template){
	return {
		init:function(){
			$('.floor').load('../html/index/floor.html',function(){
				//点击楼梯梯层，页面缓冲滚动
				var isMoving = false;
				$(".floor_list li").on("click", function(){
					isMoving = true; //即将开始移动
					
					//改变按钮的选中状态
					$(this).addClass('list_active').siblings().removeClass();
					//移动页面
					var index = $(this).index();
					var floor_top = $(".stairs").eq(index).offset().top;
					$("html, body").stop().animate({scrollTop: floor_top}, 200, function(){
						isMoving = false; //移动完成
					});
				})

				//判断楼梯的位置
				$(window).scroll(function(){
					var offHeight = $('.floor_ban').offset().top;
					var scrollHeight = $(window).scrollTop();
					if(offHeight < scrollHeight){
						var Top = scrollHeight + 100;
						$('.floor_list').offset({top:Top})
					}
					//判断页面滚动，梯层的位置
					if (!isMoving) {
						var floor_scrllTop = $(document).scrollTop();
						//遍历所有的楼层div
						$(".stairs").each(function(){
							var floor_top = $(this).offset().top;
							if (floor_scrllTop >= floor_top) {
								var index = $(this).index();
								$(".floor_list li").eq(index).addClass("list_active")
								                 .siblings("li").removeClass(); 
							}
						})
					}
				})
				
				// function Floor(){

				// }
				// Floor.prototype.floor_good = template.compile(
				// 	"<div class='female_2ad'>
				// 	<div class='ad_tittle'>
				// 		<img src="../index/img/female/woman_2ad.png" alt="">
				// 		<span>全部女装</span>
				// 	</div>\
				// 	")

			})
		}
	}
})