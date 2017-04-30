<?php 
    $username = $_GET['username'];
    $gid = $_GET['gid'];
    $con = new mysqli('127.0.0.1','root','','vip');
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = 'select * from users';
    $res = $con->query($sql);
    $arr = array();
    if(!$con->connect_error){
         if($res->num_rows > 0){         
                $sql = "select * from users where username = '$username'";
                // $sql = 'select * from users where username = "$username"';//不能外面单引号里面双引号的
                if($res = $con->query($sql)){
                    //找到用户信息，判断用户购物车是否存在商品
                    if($row = $res->fetch_assoc()){   
                              // print_r(111);
                        //逐行查找,一般只有一条对应的用户信息
                        if( $row['gid'] == "" ){
                             //空购物车
                            $things = array($gid);
                            // print_r($things);
                            $things = json_encode($things);
                            // echo var_dump($things);
                            // echo $things;
                            // $arr = $things;
                             // $things = $buy->gid;
                            // $sql = 'update users set gid = "'.$things.'" where username = "'.$buy->username.'"';
                            // $sql = 'update users set gid = "'.$things.'" where username = "'.$buy->username.'"';
                            // $sql = 'UPDATE  users SET  gid =  "'.$buy->gid.'" WHERE  username ="18344064956"';
                            $sql = "UPDATE  users SET  gid =  '$things' WHERE  username = '$username'";
                            // $sql = "UPDATE  users SET  gid =  '$things' WHERE  username ='".$buy->username."'";
                            // $arr = $sql;
                            if($con->query($sql)){
                                $arr = array("status"=>200,"msg"=>"空购物车信息添加成功");
                            }else{
                                $arr = $con->error;
                                $arr = array("status"=>302,"msg"=>"空购物车信息添加失败");
                            }
                            // print_r("111");
                        }else{
                             //提取信息,转换为数组//female&3&3&S
                            $things = json_decode($row['gid'],true);
                          	array_push($things,$gid);
                          	$things = json_encode($things);
                          	$sql = "UPDATE  users SET  gid =  '$things' WHERE  username = '$username'";
                          	 if($con->query($sql)){
                                $arr = array("status"=>200,"msg"=>"空购物车信息添加成功");
                            }else{
                                $arr = $con->error;
                                $arr = array("status"=>302,"msg"=>"空购物车信息添加失败");
                            }
                        }
                    }else{
                        $arr = array("status"=>400,"msg"=>"查找不到信息");
                    }
                }else{
                    //没有找到用户信息
                    $arr = array("status"=>400,"msg"=>"服务器错误");
                }
                //将用户购买信息写入数据库
                // $sql = 'update users set gid = "'.$buy->gid.'" where username = "'.$buy->username.'"';
                // $sql = "UPDATE  users SET  gid =  '".$buy->gid."' WHERE  username ='".$buy->username."'";
                // $sql = UPDATE  'vip'.'users' SET  'gid' =  'female&2&2' WHERE  'users'.'uid' =4;          
            }else{              
                 $arr = array("status"=>500,"msg"=>"没有用户信息");
            }         
             
    }else{
        $arr = array("status"=>600,"msg"=>"连接数据库失败");
    }
    print_r(json_encode($arr));
    
        // //判断是否是jsonp的请求
        // //isset(var) 判断变量是否被定义
        // if(isset($_REQUEST['callback'])){
        //     // 表示是一个jsonp的请求
        //     //找到callback 的函数名称
        //     $callback = $_REQUEST['callback'];
        //     //调用callback的函数
        //     $str = json_encode($arr);
        //     print_r( $callback."('$str')");
        // }else{
        //     array_push($arr, "连接数据库失败");
        //     $str = json_encode($arr);
        //     print_r( $str );
        // }
  //  print_r($str)
 ?>