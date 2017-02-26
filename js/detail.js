define(['jquery','template','top'],function($,template,top){
	return {
		init:function(){
			//引入头部
			top.init();
			// $('#main').load('../html/detail/detail.html',function(){

			// })
			function Detail(){
				var self = this;
				this.ajax(function(res){
					var data = {"data":JSON.parse(res)};
					var detail = self.goods(data);
					$('#main').append(detail);
					//绑定事件
					$('.little_img').on("click",'img',function(){
						var src = $(this).prop('src');
						$('.img_box>a>img').prop('src',src);
					})
					$('.img_box>img').hover(function(){
						$(this).css({
							width:1100,
							height:1390
						})
					},function(){
						$(this).css({
							width:'100%',
							height:'100%',
						})
					})
					//鼠标移动
					$('.img_box>img').mousemove(function(evt){
						var scaleW = 1100/420;
						var scaleH = 1390/531;
						var e = evt || event;
						var offLeft = e.offsetX;
						var offTop = e.offsetY;
						console.log(this);
						$(this).css({
							position:'absolute',
							left:- offLeft ,
							top:- offTop
						})
					})
				})
			}
			Detail.prototype.goods = template.compile(
				"{{each data as value index}}\
					<div class='detail_wrap'>\
						<div class='img_left'>\
							<div class='img_box'>\
								<img src='{{value.goodsImg}}' alt=''>\
								<div class='big_img'></div>\
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
											<span class='detail_num'>1</span>\
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