define(['jquery'],function($){
	return {
		init:function(){
			$('.banner').load("../html/index/banner.html",function(){
				//轮播图
				function Carousel(eles,line,next,prev,texts){
					//自动播放
					this.autoplay(eles,line);
					// this.timer(this.play,3000);
					//绑定事件
					this.bind(eles,line,next,prev,texts);
				}
				//轮播图的索引值
				Carousel.prototype.index = 0;
				Carousel.prototype.play = function(eles,line){
					this.index++;
					this.index = this.index % eles.length;
					$('.banner_pic').eq(this.index % eles.length).stop().animate({opacity:1},1000)
					 .siblings('li').stop().animate({'opacity':0},1000);
					 var offLeft = this.index * $(line).width();
					$(line).animate({
						'left':offLeft
					})
				}
				//自动播放
				Carousel.prototype.autoplay = function(eles,line){
					var self = this;
					this.timer = setInterval(function(){
						 self.index++;
						 self.index = self.index % eles.length;
						 $('.banner_pic').eq(self.index % eles.length).stop().animate({opacity:1},1000)
						  .siblings('li').stop().animate({'opacity':0},1000);
						  var offLeft = self.index * $(line).width();
						$(line).animate({
							'left':offLeft
						})
					},3000);
				}
				// Carousel.prototype.timer = setInterval;
				Carousel.prototype.bind = function(eles,line,next,prev,texts){
					var self = this;
					// console.log(self.play);
					$(eles).parent('ul').hover(function(){
						$(prev).animate({
							left:0,
							opacity:1
						});
						$(next).animate({
							right:0,
							opacity:1
						})
					},function(){
						$(prev).animate({
							opacity:0,
							left:-45
						});
						$(next).animate({
							opacity:0,
							right:-45
						})
					})
				
					$(texts).mouseover(function(){
						// console.log($(this).index());
						clearInterval(self.timer);
						self.index = $(this).index() - 1;
						// console.log(self);
						self.play(eles,line);
						// console.log(self.index);
					})
					$(texts).mouseleave(function(){
						self.autoplay(eles,line);
					})
					$(next).click(function(){
						clearInterval(self.timer);
						self.play(eles,line);
						self.autoplay(eles,line);
					})
					$(prev).click(function(){
						clearInterval(self.timer);
						if(self.index == 0){
							self.index = eles.length;
						}
						self.index = self.index - 2;
						self.play(eles,line);
						self.autoplay(eles,line);
					})
				}
				var aList = document.getElementsByClassName('banner_pic');
				var line = document.getElementsByClassName('banner_line')[0];
				var prev = document.getElementsByClassName('banner_btn_pre')[0];
				var next = document.getElementsByClassName('banner_btn_next')[0];
				var text = document.getElementsByClassName('banner_text');
				var banner = new Carousel(aList,line,next,prev,text);
			})
		}
		
	}
})