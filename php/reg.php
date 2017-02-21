<?php 
	 class Users{
        public $phone;
        public $psw;   
    }
    $con = new mysqli("127.0.0.1","root","","users");
	if(!$con->connect_error){
		$flag = true;
		$sql = "select * from users";
		$data = $con->query($sql);
		if($data->num_rows > 0){
			while($row = $data->fetch_assoc()){
				$users = new Users();
				$users->phone = $_POST['phone'];
				$users->phone = $_POST['psw'];
				if($row["username"] == $users->phone){
					//存在
					if($row["psw"] == $users->phone){
						$flag = false;
					}else{
						die( "密码错误！");
					}
					
				}else{
					
				}
			}
		}
		if(!$flag){
			echo "登录成功！";
		}else{
			echo "登录失败，用户不存在！";
		}
	}else{
		echo "连接数据库失败！";
	}
	$con->close();
 ?>