define(['jquery','top','template'],function($,top,template){
	return {
		init:function(){
			//引入头部
			top.init();
			$('.choose').load('../html/list/list.html',function(){

			})
			function List(){
				var self = this;
				//加载banner图片
				this.ajax.banner(function(res){
					//获取banner的src
					// console.log(res)
					var data = {"data":JSON.parse(res)};
					//渲染banner模版
					// console.log(data)
					var banner = self.template.banner(data);
					// console.log(banner);
					$('.list_banner').append(banner);
				});
				//加载商品列表
				this.ajax.list(function(res){
					var data = {"data":JSON.parse(res)};
					var list = self.template.list(data);
					// console.log(list)
					$('.list_goods').append(list);
					//设置a链接的href
					$('.list_goods>ul').on('click','li',function(){
						var type = location.search;
						var goodsId = $(this).attr('data-id');
						var search =type + "&id=" + goodsId;
						var href = 'http://localhost/VIP/detail/index.html' + search;
						$(this).find('a').attr('href',href);
						location.assign(href);
					})
					
					//绑定事件
					$('.aImg>img').mouseover(function(){
						// console.log(this)
						var act_src = $(this).attr('src');
						var par = $(this).closest('.goods_images')[0];
						var Oimg = par.getElementsByClassName('goods_img');
						for(var i=0;i<Oimg.length;i++){
							var alist = Oimg[i].getElementsByClassName('aImg')[0];
							alist.setAttribute('class','aImg');
						}
						$(this).closest('.goods_inner').find('.goods_act').children('img').attr('src',act_src);
						$(this).closest('.aImg').addClass('goods_active');
					})
					//点击传递参数，跳转
					$('list_goods li').on("click",function(){
						var search = location.search;
						var id = $(this).attr('data-id');
						// location.assign("http://localhost/VIP/detail.html"+search+"id="+id);
					})
				})
				// this.ajax.list();
			}

			//{src:../img..}
			List.prototype.template = {
				banner:template.compile(
					"{{each data as value index}}\
						<img src='{{value.src}}' alt=''>\
					 {{/each}}\
					"),
				list:template.compile(
					"<ul>\
						{{each data as value index}}\
							<li data-id = {{value.goodsId}}> \
								<div class='goods_inner'>\
									<a href='' class='goods_act'><img src='{{value.goodsImg}}' alt=''></a>\
									<div class='goods_images'>\
										<div class='goods_img'>\
											<a href='' class='goods_active aImg'><img src='{{value.goodsImg}}' alt=''></a>\
										</div>\
										<div class='goods_img'>\
											<a href='' class='aImg'><img src='{{value.goodss1}}' alt=''></a>\
										</div>\
										<div class='goods_img'>\
											<a href='' class='aImg'><img src='{{value.goodss2}}' alt=''></a>\
										</div>\
									</div>\
									<p class='goods_info'>\
										<span class='goods_discount'>2.5折</span>\
										<p class='goods_price'>\
											<em>\
												<span class='RMB'>¥</span>\
												<span class='price'>{{value.goodsPrice}}</span>\
											</em>\
											<del>\
												<span>¥1598</span>\
											</del>\
										</p>\
										<p class='goods_text'><a href=''>{{value.goodsName}}</a></p>\
									</p>\
								</div>\
							</li>\
						{{/each}}\
					</ul>")
			};
			List.prototype.ajax = {
				banner:function(callback){
					var search = location.search.split("=");
					var search_type = search[1];
					$.ajax({
		            type:"GET",
		            data:{
		            	type:search_type
		            },
		            url:"../php/list/banner.php",
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
				},
				list:function(callback){
					var search = location.search.split("=");
					var search_type = search[1];
					console.log(search_type)
					$.ajax({
						data:{
							type:search_type
						},
						type:"GET",
						url:"../php/list/list.php",
						success:function(res){
							if(callback){
		                    	callback(res);
			                }else{
			                    console.log(res); 
			                }
						},
						error:function(){
							console.log(arguments);
						},
						dataType:'jsonp'
					})
				}
			}
			//加载模板
			var list = new List();
		}
	}
})