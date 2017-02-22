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


//给gulp安排任务 gulp都是以任务的形式进行工作的
//task 第一个参数 任务名称 
//第二个参数当前任务要干的事情
gulp.task("comCss",function(){
        sass("./login/sass/index.scss",{
            style:"compact"
        }).pipe(gulp.dest("./login/css"))
})

//给gulp添加livereload的功能

gulp.task("refalseHTML",function(){
   // console.log('dddd');
    gulp.src("./*.html").pipe( connect.reload() )
})

gulp.task('js',function(){
    // gulp.src('./js/index.js').pipe(uglify()).pipe(rename("index.min.js")).pipe(gulp.dest('dest'))
    gulp.src('./js/*.js').pipe(uglify()).pipe(concat("demo.min.js")).pipe(gulp.dest('dest'));
})
//监听css的改变 刷新页面
gulp.task('css',function(){
    gulp.src("./css/*.css").pipe( connect.reload() );
})





gulp.task("watch",function(){
    connect.server({
        livereload:true
    })
    //gulp.watch() 是gulp的模块方法
    //[] 要执行的任务
    console.log('watch');
    // gulp.watch("./*.html",["refalseHTML"]);
    gulp.watch("./login/sass/index.scss",["comCss"]);
    // gulp.watch("./js/*.js",["js"]); //不科学
    // gulp.watch("./css/*.css",['css']);  
})

