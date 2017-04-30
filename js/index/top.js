define(['jquery','cookiebase','template'],function($,cookie,template){
	return {
		init:function(callback){
			var self = this;
			//顶部导航
			$('#top').load('../html/index/top.html',function(){
				//使用cookie的信息，设置用户名
				var sCookie = getCookie('user');
				var aUser = sCookie?JSON.parse(sCookie):[];
				var name;
				if(aUser != false){
					name = aUser[aUser.length - 1].phone;
					$('.username').html(name);
				}
				
				//二级菜单显示
				function Active(btn1,btn2,cla){
					this.work(btn1,btn2,cla);
				}
				Active.prototype.work = function(btn1,btn2,cla){
					$(btn1).hover(function(){
					$(btn2 ).css({
						'display':'block'
					})
					},function(){
						$(btn2 ).css({
							'display':'none'
						})
					})
					$(btn2 ).hover(function(){
						$(this).css({
							'display':'block'
						})
						$(btn1).addClass(cla);
					},function(){
						$(btn1).removeClass(cla);
						$(this).css({
							'display':'none'
						})
					})
				}
				var collect = new Active('.tool_collect_btn','.tool_collect_hidde','btn_active');
				var club = new Active('.tool_vipclub_btn','.tool_vipclub_hidden ','btn_active');
				var service = new Active('.tool_service_btn','.tool_service_hidden ','btn_active');
				var phone = new Active('.tool_phone_btn','.tool_phone_hidden ','btn_active');
				var more = new Active('.tool_more_btn','.tool_more_hidden ','btn_active');
				var area = new Active('.area_btn','.area_hidden','area_btn_active');
				// //地区
				$('.area_hidden').on('click','a',function(){
					$('a[class=active]').removeClass('active');
					$(this).addClass('active');
					$('.area_btn').html($(this).html())
					return false;
				})

				//动态加载菜单模版数据
				function Menu(){
					var self = this;
					//加载菜单数据
					this.list_ajax(function(res){
						// console.log(res);
						var data1 = {"data":JSON.parse(res)};
						//{data:[{name:111},{name:112}]}
						// console.log(data);
						var list1 = self.template.left_list(data1);
						// var list = self.list(data);
						// console.log(list1);
						$('.menu_wrap').append(list1);

						//加载菜单更多的数据
						self.more_ajax(function(res){
							// console.log(res);
							var data2 = {"data":JSON.parse(res)};
							//{data:[{name:111},{name:112}]}
							// console.log(data2);
							var list2 = self.template.more_data(data2);
							// var list = self.list(data);
							// console.log(list2);
							$('.menu_more').append(list2);
							//加载完数据后绑定事件
							self.bind();
						})
						
					})
					
					
				}
				//{data:[{name:111},{name:112}]}
				
				Menu.prototype.template = {
					left_list:template.compile(
					"<ul class='menu_left'>\
						{{each data as value index}}\
							{{if index == 0}}\
								<li><a href='http://localhost/VIP/index/index.html' class='menu_active menu_left_a '>{{value.name}}</a></li>\
								{{else if index == 8}}\
								<li class='menu_more'><a href='' class='menu_left_a'>{{value.name}}</a></li>\
								{{else}}\
								<li><a href='' class='menu_left_a'>{{value.name}}</a></li>\
							{{/if}}\
						{{/each}}\
					</ul>"),
					more_data:template.compile(
						"<div class='more_hidden'>\
							{{each data as value index}}\
								<a href=''>\
									<span class='more_text'>{{value.name}}</span>\
									<span class='ping'></span>\
									<img src='{{value.src}}' alt='{{value.name}}'>\
								</a>\
							{{/each}}\
						</div>")
				}
				Menu.prototype.list_ajax = function(callback){
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
				Menu.prototype.more_ajax = function(callback){
					$.ajax({
		            type:"GET",
		            url:"../php/index/top_more.php",
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
				Menu.prototype.bind = function(){
					$('.more_hidden>a').hover(function(){
						var text = this.getElementsByClassName('more_text')[0];
						var ping = this.getElementsByClassName('ping')[0];
						$(text).animate({
							top:'24'
						})
						$(ping).animate({
							height:'96',
							top:'0'
						})
					},function(){
						var text = this.getElementsByClassName('more_text')[0];
						var ping = this.getElementsByClassName('ping')[0];
						$(text).animate({
							top:'48'
						})
						$(ping).animate({
							height:'48',
							top:'48'
						})
					})
				}
				var menu = new Menu();
			})
			if(callback){
				callback();
			}
		},
		cookie:function(){

		}
	}
})