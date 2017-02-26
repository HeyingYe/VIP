<?php 
    class Banner{
        public $src;      
    }
    
    $con = new mysqli('127.0.0.1','root','','vip');
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = 'select * from banner';
    $res = $con->query($sql);
    $arr = array();
    //获取用户发送的类型
    $data = $_GET['type'];
    if(!$con->connect_error){
         if($res->num_rows > 0){
                while($row = $res->fetch_assoc()){
                    //筛选对应的banner地址信息
                    if($data == $row["type"]){
                    	$banner = new Banner();
                    	$banner->src = $row["src"];
                    	array_push($arr, $banner);
                    }
                    
                }

                //返回json字符串  
            }else {
                array_push($arr, "没有商品的banner");
            }
    }else{
        array_push($arr, "连接数据库失败");
    }

    // print_r($arr);
    
        //判断是否是jsonp的请求
        //isset(var) 判断变量是否被定义
        if(isset($_REQUEST['callback'])){
            // 表示是一个jsonp的请求
            //找到callback 的函数名称
            $callback = $_REQUEST['callback'];
            //调用callback的函数
            $str = json_encode($arr);
            print_r( $callback."('$str')");
        }else{
            array_push($arr, "连接数据库失败");
            $str = json_encode($arr);
            print_r( $str );

        }


  //  print_r($str)

 ?>