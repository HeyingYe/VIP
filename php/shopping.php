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
    $arr = array();
    if(!$con->connect_error){
         if($res->num_rows > 0){
            $sql = 'select * from users where username='.$buy->username;
            if($con->query($sql)){
                //将用户购买信息写入数据库
                $sql = 'update users set gid='.$buy->gid.'where username='.$buy->username;
                $con->query($sql);
                $arr = "插入数据成功";
            }else{
                 $arr = "插入数据失败";
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
            }else {
                array_push($arr, "没有该用户信息");
            }
    }else{
        array_push($arr, "连接数据库失败");
    }

    print_r($arr);
    
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