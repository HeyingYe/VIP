define(['jquery','template'],function($,template){
	function Aside(){
		var aside = this.aside();
		$('body').append(aside);
	}
	Aside.prototype.aside = template.compile(
		"<div class='right_aside'>\
					<div class='car_goods'>\
						<h3>购物车商品，请尽快结算</h3>\
						<ul>\
						</ul>\
						<p class='goods_all'><span class='all_num'>0</span>件商品<em>¥580</em></p>\
						<button class='pray'>去购物袋结算</button>\
					</div>\
					<div class='car_shopping'>\
						<p class='car_text'>购物袋</p>\
						<span class='car_num'>0</span>\
					</div>\
				</div>");
	Aside.prototype.ajax = function(){
		$.ajax({
            type:"GET",
            url:"../php/index/top_menu.php",
            success:function(res){
                if(callback){
                    callback(res);
                }else{
                    console.log(res); 
                }
               
            },
            complete:function(){
            	console.log("正在请求")
            },
            error:function(){
                console.log(arguments);
            },
            dataType:"jsonp"
		})
	}
	Aside.prototype.bind = function(){
		//点击弹出
		$('.car_shopping').on('click',function(){
			var right = parseInt($('.car_goods').css('right'));
			if(right != 36){
				$('.car_goods').animate({
					right:36
				})
			}else{
				$('.car_goods').animate({
					right:-274
				})
			}
		})
		//计算
		var all_n = 0;//总数量
		var sum_p = 0;//总价格
		$('.car_number').each(function(){
			all_n += ($(this).html() - 0);
		})
		$('.all_num').html(all_n);

		$('.car_good_price').each(function(){
			sum_p += ($(this).html() - 0);
		})
		$('.goods_all em').html("¥"+sum_p);

	}
	return Aside;
	
})