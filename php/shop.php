<?php 
    class Buy{
        public $username;
        public $gid;
    }
    $buy = new Buy();
    $buy->username = $_GET['username'];
    $buy->gid = $_GET['gid'];
    $con = new mysqli('127.0.0.1','root','','vip');
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = 'select * from users';
    $res = $con->query($sql);
    if(!$con->connect_error){
         if($res->num_rows > 0){         
                $sql = 'select * from users where username = "'.$buy->username.'"';             
                if($res = $con->query($sql)){
                    //找到用户信息，判断用户购物车是否存在商品
                    if($row = $res->fetch_assoc()){             
                        //逐行查找,一般只有一条对应的用户信息
                        if(var_dump((bool) $row['gid']) == true){
                         	$things = $row['gid'] + $buy->gid;
                         	var_dump( false);
                            $sql = "UPDATE  users SET  gid =  '$things' WHERE  username ='".$buy->username."'";
                            // $arr = $sql;
                            if($con->query($sql)){
                                $arr = array("status"=>200,"msg"=>"购买信息添加成功");
                             }else{
                                $arr = array("status"=>301,"msg"=>"购物车信息添加失败");
                             }
                        }else{
                            //空购物车
                            $things = array($buy->gid);
                            // print_r($things);
                            // $things = json_encode($things);
                            // echo var_dump($things);
                            // echo $things;
                            // $arr = $things;
                             // $things = $buy->gid;
                            // $sql = 'update users set gid = "'.$things.'" where username = "'.$buy->username.'"';
                            // $sql = 'update users set gid = "'.$things.'" where username = "'.$buy->username.'"';
                            // $sql = 'UPDATE  users SET  gid =  "'.$buy->gid.'" WHERE  username ="18344064956"';
                            $sql = "UPDATE  users SET  gid =  '$things' WHERE  username ='18344064956'";
                            // $sql = "UPDATE  users SET  gid =  '$things' WHERE  username ='".$buy->username."'";
                            // $arr = $sql;
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
                    $arr = array("status"=>500,"msg"=>"服务器错误");
                }
                //将用户购买信息写入数据库
                // $sql = 'update users set gid = "'.$buy->gid.'" where username = "'.$buy->username.'"';
                // $sql = "UPDATE  users SET  gid =  '".$buy->gid."' WHERE  username ='".$buy->username."'";
                // $sql = UPDATE  'vip'.'users' SET  'gid' =  'female&2&2' WHERE  'users'.'uid' =4;          
            }else{              
                 $arr = array("status"=>400,"msg"=>"查找不到用户信息");
            }         
                // while($row = $res->fetch_assoc()){
                //     $goods = new Goods();
                //     $goods->goodsId = $row["uid"];
                //     $goods->goodsName = $row["name"];
                //     $goods->goodsPrice = $row["price"];
                //     $goods->goodsImg = $row["src"];
                //     $goods->goodss1 = $row["s1"];
                //     $goods->goodss2 = $row["s2"];
                //     array_push($arr, $goods);
                // }

                //返回json字符串  
            // }else {
            //     array_push($arr, "没有该用户信息");
            // }
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