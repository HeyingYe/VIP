define(['jquery'],function($){
	return {
		init:function(){
			$('.banner').load("../html/index/banner.html",function(){
				//轮播图
				function Carousel(eles,line,next,pre){
					//自动播放
					this.autoplay(eles,line);
				}
				//轮播图的索引值
				Carousel.prototype.index = 0;
				//自动播放
				Carousel.prototype.autoplay = function(eles,line){
					var self = this;
					this.timer = setInterval(function(){
						self.index++;
						for(var i=0;i < eles.length;i++){
							eles[i].style.opacity = 0;
						}
						self.index = self.index % eles.length;
						//下划线运动
						$(line).animate({

						})
						line[self.index].className = 'banner_num_active';
						starmove(self.ele[self.i],{"opacity":100});
					},3000);

				}
			})
		}
		
	}
})