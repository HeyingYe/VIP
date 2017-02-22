<?php 
	 class Users{
        public $phone;
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
				$users->phone = $_POST['phone'];
				$users->psw = $_POST['psw'];
				if($row["username"] == $users->phone){
					//存在
					$flag = true; 
				}
			}
		};
		//判断是否能注册成功
		if($flag){
			//注册失败，返回信息
			$result = array('status' => 100, 'msg'=>'请求失败，用户已存在');
		}else{
			//注册成功，用户信息写入数据库
			$sql = "insert into users (username,psw) values($users->phone,$users->psw)";
			if($con->query($sql)){
				$result = array('status' => 200, 'msg'=>'请求成功，用户注册成功');
			}else{
				$result = array('status' => 201, 'msg'=>'请求成功，用户注册失败');
			}
		}
	}else{
		$result = array('status' => 101, 'msg'=>"连接数据库失败");
	}
	$con->close();
	//输出结果转成json字符串
	print_r(json_encode($result));
 ?>