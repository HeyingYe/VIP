define(['jquery','cookiebase'],function($,cookie){

	return {
		init:function(){
			var self = this;
			$('#reg').load('../html/reg/reg.html',function(){				
				var obj = {};
				var flag = true;
				//点击注册，判断所有信息是否正确
				$('.reg_btn').click(function(){
					for(var key in obj){
						if(!obj[key]){
							flag = false;
						}
					}
					console.log(flag);
					if(flag){
						//存入cookie中
						self.cookie();
						//开始向服务器提交信息
						self.ajax();

					}else{
						flag = true;
					}
					return false;
				})
				//判断是够同意服务条款
				obj.agree = $('.reg_agree').prop('checked');
				$('.reg_agree').on('change',function(){
					obj.agree = $(this).prop('checked');
				})
				//手机号码验证
				$('.phone_Num').on('focus',function(){
					var phone_Num = $('.phone_Num').val();
					if(!phone_Num.length>0){
						$('.phone_error').html('手机号码不能为空')
											.animate({
												opacity:1,
												top:-35,						
											})
					}else{
						if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone_Num)){
							$('.phone_error').html('请输入正确的手机号！')
											.animate({
												opacity:1,
												top:-35,						
											})
						}
					}
					
				});
				$('.phone_Num').on('blur',function(){
					$('.phone_error   ').animate({
												opacity:0,
												top:-45,						
											})
					
				})
				$('.phone_Num').on('keyup',function(){
					var phone_Num = $('.phone_Num').val();
					if(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone_Num)){
						$(this).css({
							'background':'#fff',
							'border-color':'#999',
						})
						obj.phone = true;
					}else{
						$(this).css({
							'background':'#ffe6e7',
							'border-color':'#fca1a5',
						})
						obj.phone = false;
					}
				})

				//密码验证
					$('.psw').on('focus',function(){
						var psw = $('.psw').val();
						if(!psw.length>0){
							$('.psw_error  ').html('密码不能为空')
												.animate({
													opacity:1,
													top:-35,						
												})
						}else{
							if(!/^[0-9a-zA-Z]{6,20}$/.test(psw)){
								$('.psw_error  ').html('密码由6-20位字母，数字和符号组合')
												.animate({
													opacity:1,
													top:-35,						
												})
							}
						}
			})
				$('.psw').on('blur',function(){
					$('.psw_error  ').animate({
												opacity:0,
												top:-45,						
											})
					
				})
				$('.psw').on('keyup',function(){
					var psw = $('.psw').val();
					if(/^[0-9a-zA-Z]{6,20}$/.test(psw)){
						$(this).css({
							'background':'#fff',
							'border-color':'#999',
						})
						obj.psw = true;
					}else{
						$(this).css({
							'background':'#ffe6e7',
							'border-color':'#fca1a5',
						})
						obj.psw = false;
					}
				})

				//重复密码
				$('.checked_psw ').on('focus',function(){var checked_psw  = $('.checked_psw ').val();
						if(!checked_psw .length>0){
							$('.ch_psw_error').html('请确认密码')
												.animate({
													opacity:1,
													top:-35,						
												})
						}else{
							if($('.psw').val()!=$('.checked_psw').val()){
								$('.ch_psw_error').html('两次密码输入不一致，请重新输入')
												.animate({
													opacity:1,
													top:-35,						
												})
							}
							
						}
					
					});
				$('.checked_psw ').on('blur',function(){
					$('.ch_psw_error').animate({
												opacity:0,
												top:-45,						
											})
					
				})
				$('.checked_psw ').on('keyup',function(){
					var checked_psw  = $('.checked_psw ').val();
					if($('.psw').val()==$('.checked_psw').val()){
						$(this).css({
							'background':'#fff',
							'border-color':'#999',
						})
						obj.check_psw = true;
					}else{
						$(this).css({
							'background':'#ffe6e7',
							'border-color':'#fca1a5',
						})
						obj.check_psw = false;
					}
				})
			})
		},
		cookie:function(){
			//获取cookie
			var sCookie	=getCookie("user");
			var aUser = sCookie?JSON.parse(sCookie):[];
			//[{phone:999,psw:999}]
			//遍历cookie，判断是否已存在cookie中
			var flag = false;//假设不存在
			for(var i = 0;i < aUser.length;i++){
				if(aUser[i].phone == $('.phone_Num').val()){
					flag = true;//存在
				}
			}
			if(!flag){
				//不存在就添加到cookie中
				aUser.push({"phone":$('.phone_Num').val(),"psw":$('.psw').val()});
				setCookie("user",JSON.stringify(aUser),7,"/");
			}
		},
		ajax:function(){
			$.ajax({
				type:'POST',
				url:'localhost/VIP/php/reg.php',
				success:function(res){
					location.assign();
				},
				error:function(){
					console.log(arguments);
				},
				data:{
					"phone":$('.phone_Num').val(),
					"psw":$('.psw').val()
				}
			})
		}
	}
})