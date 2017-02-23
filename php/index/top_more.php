<?php 
    class More{
        public $name;
        public $src;
    }
    
    $con = new mysqli('127.0.0.1','root','','vip');
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = 'select * from more_data';
    $res = $con->query($sql);
    $arr = array();
    if(!$con->connect_error){
         if($res->num_rows > 0){
                while($row = $res->fetch_assoc()){
                    $more = new More();
                    $more->name = $row["name"];
                    $more->src = $row["src"];
                    array_push($arr, $more);
                }
            }
    }else{
        array_push($arr, array('status' => 100, 'msg'=>"连接数据库失败"));
    }
	//返回json字符串
    // print_r(json_encode($arr));
    
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
            array_push($arr, "跨域失败");
            $str = json_encode($arr);
            print_r( $str );

        }


  //  print_r($str)

 ?>