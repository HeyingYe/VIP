//引入模块
//使用require 引入模块

//如果当前有模块就加载
//没有 的话 会进行全局查找
//还没有 就报错


var gulp = require("gulp");
var sass =  require("gulp-ruby-sass");

var connect =  require("gulp-connect"); //用来实现动态刷新功能的模块


var concat =  require("gulp-concat");//合并js文件

var rename =  require("gulp-rename"); //重命名文件

var uglify =  require("gulp-uglify") ;//压缩js

var cssmin = require('gulp-minify-css');
//给gulp安排任务 gulp都是以任务的形式进行工作的
//task 第一个参数 任务名称 
//第二个参数当前任务要干的事情
gulp.task("comCss",function(){
        sass("./login/sass/index.scss",{
            style:"compact"
        }).pipe(gulp.dest("./login/css"))
})

//压缩css样式
gulp.task('indexCssmin',function(){
    gulp.src("./index/css/*.css").pipe(cssmin()).pipe(concat('index.min.css')).pipe(gulp.dest('./index/css/'))
})
//给gulp添加livereload的功能
gulp.task("refalseHTML",function(){
   // console.log('dddd');
    gulp.src("./*.html").pipe( connect.reload() )
})

gulp.task('uglifyjs',function(){
    // gulp.src('./js/index.js').pipe(uglify()).pipe(rename("index.min.js")).pipe(gulp.dest('dest'))
    gulp.src('./js/*.js').pipe(uglify()).pipe(concat("VIP.min.js")).pipe(gulp.dest('vip'));
})
//监听css的改变 刷新页面
gulp.task('css',function(){
    gulp.src("./css/*.css").pipe( connect.reload() );
})

//监听主页css
gulp.task("indexCss",function(){
        sass("./index/sass/style.scss",{
            style:"compact"
        }).pipe(gulp.dest("./index/css"))
})
//监听主页头部css
gulp.task("topCss",function(){
        sass("./index/sass/top.scss",{
            style:"compact"
        }).pipe(gulp.dest("./index/css"))
})
//监听banner
gulp.task("bannerCss",function(){
        sass("./index/sass/banner.scss",{
            style:"compact"
        }).pipe(gulp.dest("./index/css"))
})
//监听floor
gulp.task("floorCss",function(){
        sass("./index/sass/floor.scss",{
            style:"compact"
        }).pipe(gulp.dest("./index/css"))
})
//监听list
gulp.task("listStyle",function(){
        sass("./list/sass/style.scss",{
            style:"compact"
        }).pipe(gulp.dest("./list/css"))
})
//监听list_choose
gulp.task("chooseStyle",function(){
        sass("./list/sass/choose.scss",{
            style:"compact"
        }).pipe(gulp.dest("./list/css"))
})
//监听detail
gulp.task("detailStyle",function(){
        sass("./detail/sass/style.scss",{
            style:"compact"
        }).pipe(gulp.dest("./detail/css"))
})
//监听detail mail
gulp.task("detailMail",function(){
        sass("./detail/sass/main.scss",{
            style:"compact"
        }).pipe(gulp.dest("./detail/css"))
})
//监听car
gulp.task("carStyle",function(){
        sass("./car/sass/style.scss",{
            style:"compact"
        }).pipe(gulp.dest("./car/css"))
})

gulp.task("watch",function(){
    connect.server({
        livereload:true
    })
    //gulp.watch() 是gulp的模块方法
    //[] 要执行的任务
    console.log('watch');
    // gulp.watch("./*.html",["refalseHTML"]);
    // gulp.watch("./login/sass/index.scss",["comCss"]);
    // gulp.watch("./js/*.js",["js"]); //不科学
    // gulp.watch("./css/*.css",['css']);  
    gulp.watch("./index/sass/style.scss",["indexCss"]);
    // gulp.watch("./index/sass/floor.scss",["floorCss"]);
    // gulp.watch("./index/sass/top.scss",["topCss"]);
    gulp.watch("./list/sass/style.scss",["listStyle"])
    // gulp.watch("./list/sass/choose.scss",["chooseStyle"])
    gulp.watch("./detail/sass/style.scss",["detailStyle"])
    gulp.watch("./detail/sass/main.scss",["detailMail"])
    gulp.watch("./car/sass/style.scss",["carStyle"])
})

