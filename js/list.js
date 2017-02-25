define(['jquery','top'],function($,top){
	return {
		init:function(){
			//引入头部
			top.init();
			$('.choose').load('../html/list/list.html',function(){

			})
		}
	}
})