<?php 
    class Goods{
        public $src;
        public $name;
        public $price;
        public $list;
        public $num;
    }
    $user = $_GET['username'];
    $con = new mysqli('127.0.0.1','root','','vip');
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = 'select * from users';
    // print_r($type);
    $res = $con->query($sql);
    $arr = array();
    if(!$con->connect_error){
            //进入用户信息成功
            if($res->num_rows > 0){
                $sql = "select * from users where username = '$user'";
                if($res = $con->query($sql)){
                    //查询该用户信息
                    if($row = $res->fetch_assoc()){
                        //查找用户的购物车信息gid
                        if($row["gid"] == ""){
                            //购物车为空，不作处理
                            // $arr = "购物车为空";
                            print_r("购物车为空，不作处理");
                        }else{
                            //购物车有商品,根据购物车商品的信息，寻找相对应的价格和链接
                            // print_r("查询购物车");
                            $goods = json_decode($row["gid"],true);
                            // print_r($goods[0]);
                            // print_r(count($goods));
                            //遍历数组内容
                            // ['female&3&4&S','female&3&4&S']
                            for($i=0;$i<count($goods);$i++){
                                $good = new Goods();
                                $good->list = $goods[$i];
                                //每循环一次，就创建一个对象，将购物车的信息放入对象中
                                // print_r($good->list);
                               $good_arr = explode("&", $goods[$i]);
                               $good->num = $good_arr[2];
                               // print_r($good_arr);
                               // [['female',3,4,'S'],['female',3,4,'S']]
                               //根据数组里面的值逐步向数据库查询
                               $type = $good_arr[0];//type数据表
                               // var_dump($type);
                               $id = $good_arr[1];//商品ID号
                               // $size = $good_arr[2];//商品尺码
                               $sql = "select * from $type";
                               if($res = $con->query($sql)){
                                // print_r("查询购物车的信息");
                                    //进入数据表
                                    $sql =  "select * from $type where uid = $id";
                                     if($res = $con->query($sql)){
                                        if($row = $res->fetch_assoc()){
                                            $good->src = $row["src"];
                                            $good->name = $row["name"];
                                            $good->price = $row["price"];
                                            array_push($arr, $good);
                                            // var_dump($arr);
                                        }
                                     }
                               }
                            }
                        }
                    }else{
                        //用户没有信息
                        $arr = array("status"=>300,"msg"=>"查找不到用户信息"); 
                    }
                }else{
                    //进入该用户的信息失败
                     $arr = array("status"=>400,"msg"=>"查找不到该用户信息");
                }
            }else {
                 $arr = array("status"=>500,"msg"=>"没有用户信息");
            }
    }else{
        $arr = array("status"=>600,"msg"=>"连接数据库失败");
    }

    // // print_r($arr);
    
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
 ?>