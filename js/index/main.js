define(['jquery','template'],function($,template){
	function Top(){
		//调用模版原型方法
		//获取数据后，开始渲染模版，并插入节点
		this.ajax(function(res){

		});
		//给模版节点绑定事件
		this.bind();
	}
	Top.prototype.template = {
		//加载模版
		user:template.compile(),

	};
	//请求模版数据
	Top.prototype.ajax = function(callback){
		$.ajax({
			type:"GET",
            url:"",
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
            dataType:"jsonp"
		})
	}
	//模版绑定数据
	Top.prototype.bind = function(){

	}
	return Top;
})