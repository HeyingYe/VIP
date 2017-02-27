define(['jquery','template','top'],function($,template,top){
	return {
		init:function(){
			//引入头部
			top.init();
			// $('body').load('../html/detail/detail.html',function(){

			// })

			function Detail(){
				var self = this;
				var aside = this.aside();
				$('body').append(aside);
				this.ajax(function(res){
					var data = {"data":JSON.parse(res)};
					var detail = self.goods(data);
					$('#main').append(detail);
					//绑定事件
					$('.little_img').on("click",'img',function(){
						var src = $(this).prop('src');
						$('.img_box').css({
							background:'url(' + src + ') center;background-size:cover'
						});
						$('.big_Img').prop('src',src);
					})
					$('.minu').click(function(){
						var num = $('.detail_number').html();
						console.log(num)
						if(num > 1){
							num--;
							$('.detail_number').html(num)
						}
					})
					$('.add').click(function(){
						var num = $('.detail_number').html();
						num++;
						$('.detail_number').html(num)
					})
					$('.img_box').hover(function(){
						var scale = 1100/420;
						var sHeight = $(this).height() * scale;
						
						$(this).find('.big_Img').css({
							width:1100,
							height:sHeight,
							// display:'block'
						})
						$(this).find('.big_box').css({
							display:'block'
						})
					},function(){
						$(this).find('.big_box').css({
							width:420,
							height:531,
							display:'none',

						})
					})
					//鼠标移动
					$('.img_box').mousemove(function(evt){
						// var scale = 1100/420;
						var e = evt || event;
						// var offLeft = e.offsetX;
						// var offTop = e.offsetY;
						// // console.log(this);
						// $(this).find('.big_Img').css({
						// 	left:- offLeft * scale,
						// 	top:- offTop * scale,
						// 	position:'absolute'
						// })
						var $img_box = $('.img_box');//小图
						var $small_box = $('.small_box');//小范围
						var $big_Img = $('.big_Img');//大图
						var $big_box = $('.big_box');//大范围
						var scale = $big_Img.width() / $img_box.width();
						// console.log($big_Img.width())
						// console.log($img_box.width())
						// console.log($big_box.width())
						$small_box.width($big_box.width() / scale);
						// console.log($small_box.width())
						$small_box.height($big_box.height() / scale);

						// $small_box.width($img_box.width() / $big_Img.width() * $big_box.width());
						// $small_box.height($img_box.height() / $big_Img.height() * $big_box.height());
						var x = e.pageX - $img_box.offset().left - $small_box.width() / 2;
						var y = e.pageY - $img_box.offset().top - $small_box.width() / 2;
						if(x < 0){
							x = 0;
						}else if(x > $img_box.width() - $small_box.width()){
							x =   $img_box.width() - $small_box.width()
						}
						if(y < 0){
							y = 0;
						}else if(y > $img_box.height() - $small_box.height()){
							y =   $img_box.height() - $small_box.height()
						}
						$('.small_box').css({
							// 'display':'block',
							left:x,
							top:y
						})
						$('.big_Img').css({
							left:- x * scale,
							top:- y * scale
						})
					})
				})
			}
			Detail.prototype.aside = template.compile(
				"<div class='right_aside'>\
					<div class='car_shopping'>\
						<span class='car_text'>购物袋</span>\
						<span class='car_num'>0</span>\
					</div>\
				</div>")
			Detail.prototype.goods = template.compile(
				"{{each data as value index}}\
					<div class='detail_wrap'>\
						<div class='img_left'>\
							<div class='img_box' style='background:url({{value.goodsImg}}) center;background-size:cover'>\
								<div class='small_box'></div>\
								<div class='big_box'><img src='{{value.goodsImg}}' class='big_Img'></div>\
							</div>\
							<div class='little_img'>\
								<img src='{{value.goodsImg}}' alt=''>\
								<img src='{{value.goodss1}}' alt=''>\
								<img src='{{value.goodss2}}' alt=''>\
							</div>\
						</div>\
						<div class='right_choice'>\
							<h3>{{value.goodsName}}</h3>\
							<div class='price'>\
								<span class='rmb'>¥</span>\
								<span class='act_price'>{{value.goodsPrice}}</span>\
							</div>\
							<table class='detail_msg'>\
								<tr>\
									<td>运费</td><td>（订单满288免运费）</td>\
								</tr>\
								<tr>\
									<td>尺码</td>\
									<td>\
										<span class='choice_num'><input type='radio'> S</span>\
										<span class='choice_num'><input type='radio'> M</span>\
										<span class='choice_num'><input type='radio'> L</span>\
										<span class='choice_num'><input type='radio'> XL</span>\
									</td>\
								</tr>\
								<tr>\
									<td>数量</td>\
									<td class='detail_num'>\
										<p>\
											<span class='minu'>-</span>\
											<span class='detail_number'>1</span>\
											<span class='add'>+</span>\
										</p>\
									</td>\
								</tr>\
								<tr>\
									<td></td>\
									<td><input type='button' value='加入购物袋' class='buy'></td>\
								</tr>\
							</table>\
						</div>\
					</div>\
				{{/each}}")
			Detail.prototype.ajax = function(callback){
				var search1 = location.search.split("=");
				var search2 = search1[1].split("&");
				var search_type = search2[0];
				var search_id = search1[2];
				console.log(search_type)
				console.log(search_id)

				$.ajax({
		            type:"GET",
		            data:{
		            	type:search_type,
		            	id:search_id
		            },
		            url:"../php/detail.php",
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
			var detail = new Detail();
		}
	}
})