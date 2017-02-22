<?php 
	 class Users{
        public $name;
        public $psw;   
    }
    $con = new mysqli("127.0.0.1","root","","vip");
	if(!$con->connect_error){		
		$sql = "select * from users";
		$data = $con->query($sql);
		$flag = false;//假设用户不存在
		//数据库存在用户信息，开始遍历查找
		if($data->num_rows > 0){
			while($row = $data->fetch_assoc()){
				$users = new Users();
				$users->name = $_POST['name'];
				$users->psw = $_POST['psw'];
				if($row["username"] == $users->name){
					//存在用户
					//开始验证密码
					if($row["psw"] == $users->psw){
						//密码正确
						$flag = true; 
					}
				}
			}
		};
		//判断是否能登录成功
		if($flag){
			//用户存在且密码正确，登录成功
			$result = array('status' => 200, 'msg'=>'请求成功，用户存在');
		}else{
			//用户不存在
			$result = array('status' => 100, 'msg'=>'请求失败，用户信息错误');
		}
	}else{
		$result = array('status' => 101, 'msg'=>"连接数据库失败");
	}
	$con->close();
	//输出结果转成json字符串
	print_r(json_encode($result));
 ?>