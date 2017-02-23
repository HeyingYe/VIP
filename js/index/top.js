define(['jquery'],function($){
	return {
		init:function(){
			var self = this;
			$('#top').load('../html/index/top.html',function(){
				//地区
				$('.area_btn').hover(function(){
					$('.area_hidden ').css({
						'display':'block'
					})
				},function(){
					$('.area_hidden ').css({
						'display':'none'
					})
				})
				$('.area_hidden').hover(function(){
					$('.area_btn').addClass('area_btn_active');
					$('.area_hidden ').css({
						'display':'block'
					})
				},function(){
					$('.area_btn').removeClass('area_btn_active');
					$('.area_hidden ').css({
						'display':'none'
					})
				})
				$('.area_hidden').on('click','a',function(){
					$('a[class=active]').removeClass('active');
					$(this).addClass('active');
					$('.area_btn').html($(this).html())
					return false;
				})
				//二级菜单显示
				function Active(){

				}
				Active.prototype.show = function(){
					
				}
				$('.tool_collect_btn').hover(function(){
					$('.tool_collect_hidde ').css({
						'display':'block'
					})
				},function(){
					$('.tool_collect_hidde ').css({
						'display':'none'
					})
				})
				$('.tool_collect_hidde ').hover(function(){
					$(this).css({
						'display':'block'
					})
					$('.tool_collect_btn').addClass('btn_active');
				},function(){
					$('.tool_collect_btn').removeClass('btn_active');
					$(this).css({
						'display':'none'
					})
				})
			})
		}
	}
})