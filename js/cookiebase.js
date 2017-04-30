//获取特停的cookie
function getCookie(name){
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i=0;i<arr.length;i++){
		var newArr = arr[i].split("=");
		if(newArr[0]==name){
			//return  newArr[1]
			
			return decodeURIComponent(newArr[1])
		}
	}
	
}

function setCookie(name,value,expires,path){
	var str = "";
	if(name!=undefined &&value!=undefined){
		//str+=name+"="+value;
		str += name+"=" + encodeURIComponent( value );
//					document.cookie = str;
		if(expires){
			//expires  需要保存的时间  7 表示保存7天
			 
			 var d = new Date();
			 d.setDate(d.getDate()+expires)
			//拼接过期时间
			str+=";expires=" +d
		}
		if(path){

			//拼接访问路径
			str+=";path=" +path
		}
		document.cookie = str;
	}else{
		alert('参数有问题')
	}
}

//cookie 是有大小的
//不能无休止的设置cookie
//当条cookie的大小 4k  //
//每个浏览器 的每个域名下最大条数一般是50条
//当超出范围的时候  消失的cookie 不一定是最old的那条