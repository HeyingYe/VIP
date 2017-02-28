define(['jquery','template','top','aside'],function($,template,top,Aside){
	return {
		init:function(){
			//引入头部
			top.init();
			//引入侧边栏
			var aside = new Aside();

			function Detail(){
				var self = this;
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
					//加减商品数量
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
					//放大镜
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
						var e = evt || event;
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
					//购物车
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
					
					$('.buy').on('click',function(){
						//必需选择尺码
						var flag = $(':radio:checked');
						if(flag[0] != undefined){
							//发送数据到服务器
							self.shopping_ajax(function(res){
								// console.log(res)
							});
							$('.goods_size').removeClass('goods_size_error');
							var carPos;//购物车位置
							//弹出购物袋
							$('.car_goods').animate({
									right:36
								},function(){
									//商品飞入购物袋效果
									var $currentImg = $('.big_Img');
									var $copyImg = $currentImg.clone();
									// console.log($currentImg.height())
									//获取图片原来的位置
									var startPos = $('.buy').offset();
									// console.log(startPos);
									// var startWidth = $currentImg.width();
									// var startHeight = $currentImg.height();
									// console.log($('.img_box').width())
									//将复制的图片插入
									$copyImg.appendTo('body');
									//设置复制图片的位置
									$copyImg.css({
										position:'absolute',
										left:startPos.left ,
										top:startPos.top ,
										width:49,
										height:61,
										'z-index':1111111,
									})
									
									
									//获取购物车位置
									var carPos = $('.car_goods').offset();
									$copyImg.animate({
										left:carPos.left,
										top:carPos.top + 50,
										width:0,
										height:0,
										opacity:0
									},1000,function(){
										$copyImg.remove();
										//加入购物车
										// var goods_list = $('.car_goods>ul>li');
										// // console.log(goods_list[0] == undefined)
										// var goods = location.search.split("=");
										// var goods_type = (goods[1].split("&"))[0];
										// var goods_id = goods[2];
										// var size = $(':radio:checked').prop('value');
										// var goods_uid = goods_type +"&"+ goods_id +"&"+size;
										// if(goods_list[0] == undefined){
										// 	var html = "<li data-id = '"+goods_uid+"'>\
										// 				<img src='"+$('.big_Img').prop('src')+"' alt=''>\
										// 				<p>\
										// 					<span class='car_text'>"+$('.right_choice h3').html()+"</span>\
										// 					<span class='car_number'>"+$('.detail_number').html()+"</span>\
										// 					<span class='car_good_price'>¥<span class='g_price'>"+$('.act_price').html()+"</span></span>\
										// 				</p>\
										// 			</li>"
										// 	$('.car_goods ul').append(html);
										// }else{
										// 	$('.car_goods>ul>li').each(function(){
										// 		// console.log(this);
										// 		var data_id = $(this).attr('data-id');
										// 		if(goods_uid == data_id){
										// 			var num = ($(this).find('.car_number').html() - 0) + ($('.detail_number').html() - 0);
										// 			$(this).find('.car_number').html(num);
										// 		}else{
										// 			var html = "<li data-id = '"+goods_uid+"'>\
										// 							<img src='"+$('.big_Img').prop('src')+"' alt=''>\
										// 							<p>\
										// 								<span class='car_text'>"+$('.right_choice h3').html()+"</span>\
										// 								<span class='car_number'>"+$('.detail_number').html()+"</span>\
										// 								<span class='car_good_price'>¥<span class='g_price'>"+$('.act_price').html()+"</span></span>\
										// 							</p>\
										// 						</li>"
										// 			$('.car_goods ul').append(html);
										// 		}
										// 	})
										// }
										//移除原来的模版
										$('.car_goods>ul>li').remove();
										//重新渲染购物车模块
										self.aside_ajax(function(res){
											var data = {"data":JSON.parse(res)};
											var aside = self.car_goods(data);
											$('.car_goods>ul').append(aside);
												//计算
											var all_n = 0;//总数量
											var sum_p = 0;//总价格
											$('.car_number').each(function(){
												all_n += ($(this).html() - 0);
											})
											$('.all_num').html(all_n);

											$('.car_good_price').each(function(){
												sum_p += ($(this).find('.g_price').html() - 0);
											})
											$('.goods_all em').html("¥"+sum_p);
										})
										//计算功能
										var all_n = 0;
										var all_p = ($('.car_number').html() - 0) * ($('.act_price').html() - 0);
										var sum_p = 0;
										$('.car_number').each(function(){
											all_n += ($(this).html() - 0);
										})
										// console.log(all_n)
										$('.car_good_price').html(all_p)
										$('.all_num').html(all_n);
										$('.car_good_price').each(function(){
											sum_p += ($(this).html() - 0);
										})
										$('.goods_all em').html("¥"+sum_p);
									})
								})
							
						}else{
							$('.goods_size').addClass('goods_size_error');
						}					
					})
				})
			}
			Detail.prototype.car_goods = template.compile(
				"{{each data as value index}}\
					<li data-id = '{{value.list}}'>\
						<img src='{{value.src}}' alt=''>\
						<p>\
							<span class='car_text'>{{value.name}}</span>\
							<span class='car_number'>{{value.num}}</span>\
							<span class='car_good_price'>¥<span class='g_price'>{{value.price}}</span></span>\
						</p>\
					</li>\
				{{/each}}");
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
								<tr class='goods_size'>\
									<td>尺码</td>\
									<td>\
										<span class='choice_num'><input type='radio' name='size' value='S'> S</span>\
										<span class='choice_num'><input type='radio' name='size' value='M'> M</span>\
										<span class='choice_num'><input type='radio' name='size' value='L'> L</span>\
										<span class='choice_num'><input type='radio' name='size' value='XL'> XL</span>\
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
			Detail.prototype.aside_ajax = function(callback){
				var sCookie = getCookie('user');
				var aUser = sCookie?JSON.parse(sCookie):[];
				var username = aUser[aUser.length - 1].phone;;
				$.ajax({
		            type:"GET",
		            url:"../php/aside.php",
		            data:{
		            	username:username
		            },
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
			Detail.prototype.ajax = function(callback){
				var search1 = location.search.split("=");
				var search2 = search1[1].split("&");
				var search_type = search2[0];
				var search_id = search1[2];
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
			Detail.prototype.shopping_ajax = function(callback){
				var shopping_num = $('.detail_number').html();
				var search1 = location.search.split("=");
				var search2 = search1[1].split("&");
				var search_type = search2[0];
				var search_id = search1[2];
				//female31
				var username = $('.username').html();
				var size = $(':radio:checked').prop('value');
				// console.log(username);
				var gid = search_type +'&'+ search_id +'&'+ shopping_num +'&' + size;
				// var arr = [];
				// arr.push(gid);
				$.ajax({
		            type:"GET",
		            data:{
		            	username:username,
		            	gid:gid,
		            },
		            url:"../php/shopping.php",
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
		            }
				})
			}
			var detail = new Detail();
			// Detail.prototype.car_goods = template.compile(
			// 	"")
			// Detail.prototype.aside = template.compile(
			// 	"<div class='right_aside'>\
			// 		<div class='car_goods'>\
			// 			<h3>购物车商品，请尽快结算</h3>\
			// 			<ul>\
			// 			</ul>\
			// 			<p class='goods_all'><span class='all_num'>0</span>件商品<em>¥580</em></p>\
			// 			<button class='pray'>去购物袋结算</button>\
			// 		</div>\
			// 		<div class='car_shopping'>\
			// 			<p class='car_text'>购物袋</p>\
			// 			<span class='car_num'>0</span>\
			// 		</div>\
			// 	</div>")
		}
	}
})