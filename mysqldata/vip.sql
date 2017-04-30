-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 04 月 30 日 07:20
-- 服务器版本: 5.5.20
-- PHP 版本: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `vip`
--

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`uid`, `type`, `src`) VALUES
(1, 'female', '../list/img/female/ban1.jpg'),
(3, 'female', '../list/img/female/ban1.1.jpg'),
(4, 'female', '../list/img/female/ban1.2.jpg'),
(5, 'male', '../list/img/male/ban.jpeg');

-- --------------------------------------------------------

--
-- 表的结构 `female`
--

CREATE TABLE IF NOT EXISTS `female` (
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `discount` int(255) NOT NULL,
  `s1` varchar(255) NOT NULL,
  `s2` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `female`
--

INSERT INTO `female` (`uid`, `src`, `name`, `price`, `discount`, `s1`, `s2`) VALUES
(1, '../list/img/female/1.jpg', '蓝色七分袖连衣裙3', 666, 0, '../list/img/female/1.1.jpg', '../list/img/female/1.2.jpg'),
(2, '../list/img/female/2.jpg', '蓝色七分袖连衣裙4', 555, 0, '../list/img/female/2.1.jpg', '../list/img/female/2.2.jpg'),
(3, '../list/img/female/3.jpg', '蓝色七分袖连衣裙5', 333, 1, '../list/img/female/3.1.jpg', '../list/img/female/3.2.jpg'),
(4, '../list/img/female/4.jpg', '蓝色七分袖连衣裙6', 777, 1, '../list/img/female/4.2.jpg', '../list/img/female/4.1.jpg'),
(5, '../list/img/female/5.jpg', '蓝色七分袖连衣裙7', 999, 0, '../list/img/female/5.1.jpg', '../list/img/female/5.2.jpg'),
(6, '../list/img/female/6.jpg', '蓝色七分袖连衣裙8', 888, 0, '../list/img/female/6.1.jpg', '../list/img/female/6.2.jpg'),
(7, '../list/img/female/7.jpg', '蓝色七分袖连衣裙9', 999, 0, '../list/img/female/7.1.jpg', '../list/img/female/7.2.jpg'),
(8, '../list/img/female/8.jpg', '蓝色七分袖连衣裙10', 1111, 0, '../list/img/female/8.1.jpg', '../list/img/female/8.2.jpg'),
(9, '../list/img/female/9.jpg', '蓝色七分袖连衣裙11', 777, 0, '../list/img/female/9.1.jpg', '../list/img/female/9.2.jpg'),
(10, '../list/img/female/10.jpg', '蓝色七分袖连衣裙12', 1222, 0, '../list/img/female/10.1.jpg', '../list/img/female/10.2.jpg'),
(11, '../list/img/female/2.jpg', '蓝色七分袖连衣裙12', 2333, 0, '../list/img/female/2.jpg', '../list/img/female/2.jpg'),
(12, '../list/img/female/2.jpg', '蓝色七分袖连衣裙12', 1333, 0, '../list/img/female/2.jpg', '../list/img/female/2.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `male`
--

CREATE TABLE IF NOT EXISTS `male` (
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `s1` varchar(255) NOT NULL,
  `s2` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `male`
--

INSERT INTO `male` (`uid`, `name`, `price`, `src`, `s1`, `s2`) VALUES
(1, '骆驼牌 2017新品 多袋可脱卸帽 长袖夹克深蓝', 998, '../list/img/male/1.jpg', '../list/img/male/1.1.jpg', '../list/img/male/1.2.jpg'),
(2, '骆驼牌 2017新品 多袋可脱卸帽 长袖夹克深蓝', 556, '../list/img/male/2.jpg', '../list/img/male/2.1.jpg', '../list/img/male/2.2.jpg'),
(3, '骆驼牌 2017新品 多袋可脱卸帽 长袖夹克深蓝', 789, '../list/img/male/3.jpg', '../list/img/male/3.1.jpg', '../list/img/male/3.2.jpg'),
(4, '骆驼牌 2017新品 多袋可脱卸帽 长袖夹克深蓝', 533, '../list/img/male/4.jpg', '../list/img/male/4.1.jpg', '../list/img/male/4.2.jpg'),
(5, '骆驼牌 2017新品 多袋可脱卸帽 长袖夹克深蓝', 775, '../list/img/male/5.jpg', '../list/img/male/5.1.jpg', '../list/img/male/5.2.jpg'),
(6, '骆驼牌 2017新品 多袋可脱卸帽 长袖夹克深蓝', 654, '../list/img/male/6.jpg', '../list/img/male/6.1.jpg', '../list/img/male/6.2.jpg'),
(7, '骆驼牌 2017新品 多袋可脱卸帽 长袖夹克深蓝', 897, '../list/img/male/7.jpg', '../list/img/male/7.1.jpg', '../list/img/male/7.2.jpg'),
(8, '骆驼牌 2017新品 多袋可脱卸帽 长袖夹克深蓝', 1222, '../list/img/male/8.jpg', '../list/img/male/8.1.jpg', '../list/img/male/8.2.jpg'),
(9, '骆驼牌 2017新品 多袋可脱卸帽 长袖夹克深蓝', 1131, '../list/img/male/9.jpg', '../list/img/male/9.1.jpg', '../list/img/male/9.2.jpg'),
(10, '骆驼牌 2017新品 多袋可脱卸帽 长袖夹克深蓝', 1222, '../list/img/male/10.jpg', '../list/img/male/10.1.jpg', '../list/img/male/10.2.jpg'),
(11, '骆驼牌 2017新品 多袋可脱卸帽 长袖夹克深蓝', 447, '../list/img/male/11.jpg', '../list/img/male/11.1.jpg', '../list/img/male/11.2.jpg'),
(12, '骆驼牌 2017新品 多袋可脱卸帽 长袖夹克深蓝', 878, '../list/img/male/12.jpg', '../list/img/male/12.1.jpg', '../list/img/male/12.2.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `menu_list`
--

CREATE TABLE IF NOT EXISTS `menu_list` (
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `menu_list`
--

INSERT INTO `menu_list` (`uid`, `name`) VALUES
(1, '首页'),
(2, '3.2上新季'),
(3, '唯品国际'),
(4, '母婴'),
(7, '居家'),
(8, '男士'),
(9, '美妆'),
(10, '生活'),
(11, '更多');

-- --------------------------------------------------------

--
-- 表的结构 `more_data`
--

CREATE TABLE IF NOT EXISTS `more_data` (
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `more_data`
--

INSERT INTO `more_data` (`uid`, `name`, `src`) VALUES
(1, '金融', '../index/img/jinrong.jpg'),
(2, '女装', '../index/img/female.jpg'),
(3, '鞋包', '../index/img/package.jpg'),
(4, '配饰', '../index/img/zhu.jpg'),
(5, '运动', '../index/img/sport.jpg'),
(6, '爱奢侈', '../index/img/she.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `user2`
--

CREATE TABLE IF NOT EXISTS `user2` (
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `psw` varchar(255) NOT NULL,
  `gid` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `psw` varchar(255) NOT NULL,
  `gid` varchar(255) NOT NULL,
  `type` int(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=27 ;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`uid`, `username`, `psw`, `gid`, `type`) VALUES
(2, '18344064956', '111111', '', 0),
(3, '18344064958', '111111', '["female&6&1&S"]', 0),
(4, '18344064952', '111111', '', 0),
(5, '18344064962', '111111', '', 0),
(6, '18344094956', '111111', '', 0),
(7, '18766666666', '111111', '', 0),
(8, '18433333333', '111111', '', 0),
(9, '18344444444', '1111111', '', 0),
(10, '18722290987', '1111111', '', 0),
(11, '18433330987', '111111', '["female&6&1&S","female&6&1&S","female&6&1&S"]', 0),
(12, '18322789876', '111111', '["female&6&1&S","female&6&1&S","female&6&1&S"]', 0),
(13, '18344098765', '111111', '', 0),
(14, '18966754689', '1111111', '', 0),
(15, '18956734658', '111111', '', 0),
(16, '187989087', '111111', '["female&6&1&S","female&6&1&S","female&6&1&S"]', 0),
(17, '13413327678', '123456', '["male&2&1&S","male&2&1&S"]', 0),
(18, '18976547875', '111111', '', 0),
(19, '13138287598', '1111111', '', 0),
(20, '13138286765', '111111', '["female&2&1&S","female&2&1&S","female&2&1&S","female&2&1&S","female&2&1&S","female&2&1&S","female&2&1&S"]', 0),
(21, '1876759065', '111111', '["female&2&1&S","female&2&1&S"]', 0),
(22, '1316754689', '1111111', '["female&6&1&S","female&6&1&S"]', 0),
(23, '189348762', '111111', '', 0),
(24, '18344064953', '111111', '["female&3&1&S","female&3&1&S","female&3&1&S","female&3&6&S","female&3&6&S","female&3&6&S"]', 0),
(25, '17172677283', '11111', 'male23213', 0),
(26, '18344064933', '111111', '', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
