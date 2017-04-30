define(['jquery','cookiebase'],function($,cookie){
	return {
		init:function(){
			var self = this;
			$('#login').load('../html/login/login.html',function(){
				//根据cookie设置用户信息
				self.cookie();
				//开始验证用户信息
				var obj = {};
				if($('.user').val()){
					//用户名不为空
					obj.name = true;
				}else{
					obj.name = false;
				}
				if($('.psw').val()){
					//用户名不为空
					obj.psw = true;
				}else{
					obj.psw = false;
				}
				//点击登录按钮
				var flag = true;//假设用户信息正确
				$('.login_btn').click(function(){
					for(var key in obj){
						if(!obj[key]){
							flag = false;
						}
					}
					//注册信息是否正确
					// console.log(flag)
					if(flag){
						//正确开始登录,发送数据
						self.ajax();
					}else{
						flag = true;
					}
					
					return false;
				})

				//用户输入框
				$('.user').on("keyup",function(){
					if($(this).val()){
						//不为空
						$(this).css({
							'border-color':"#333"
						})
						$('.user_error').css({
							'opacity':0,
							'bottom':0
						})
					}else{
						$(this).css({
							'border-color':"red"
						})
						$('.user_error').html('请输入登录名').css({
							'opacity':1,
							'bottom':-24
						})
					}
				})
				//密码框
				//用户输入框
				$('.psw').on("keyup",function(){
					if($(this).val()){
						//不为空
						$(this).css({
							'border-color':"#333",
						})
						$('.psw_error').css({
							'opacity':0,
							'bottom':0
						})
					}else{
						$(this).css({
							'border-color':"red",
						})
						$('.psw_error').html('请输入密码').css({
							'opacity':1,
							'bottom':-24
						})
					}
				})
			})
		},
		cookie:function(){
			//读取浏览器的cookie,如有则自动设置
			var sCookie	= getCookie("user");
			var aUser = sCookie?JSON.parse(sCookie):[];
			//[{phone:999,psw:999}]
			if(aUser){
				//cookie存在用户信息,自动填写用户信息
				$('.user').val(aUser[aUser.length - 1].phone);
				$('.psw').val(aUser[aUser.length - 1].psw);
			}else{
				//不存在

			}
		},
		ajax:function(){
			$.ajax({
				type:'POST',
				url:'../php/login.php',
				success:function(res){
					var res = JSON.parse(res);
					// console.log(res);
					if(res.status == 200){
						//登录成功
						// console.log("登录成功")
						location.assign("http://localhost/VIP/index/index.html")
					}else{
						$('.psw_error').html('登录名或密码错误').css({
							'opacity':1,
							'bottom':-24
						})
					}
				},
				error:function(){
					console.log(arguments);
				},
				data:{
					'name':$('.user').val(),
					'psw':$('.psw').val()
				}
			})
		}
	}
})