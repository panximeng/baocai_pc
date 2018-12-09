window.onload=function(){
    var banner = document.getElementsByClassName("banner")[0];
    var imgs = document.querySelectorAll(".bac_img img");
    var lis = document.querySelectorAll(".banner>.buttoms ul li");
    var num = 0;//申明变量用来计数
    imgs[0].style.opacity = 1;//页面进入时显示第一张图片
    lis[0].style.backgroundColor = "#ff8351";

    //为每个按钮添加点击事件
    for(var i = 0;i < lis.length;i++){
        lis[i].index = i;
        lis[i].onclick = function () {
            for(var j = 0;j < lis.length;j ++){
                lis[j].style.backgroundColor = "red";
                imgs[j].style.opacity = "";
            }
            this.style.backgroundColor = "#ff8351";
            imgs[this.index].style.opacity = "1";
        }
    }

    //给定时器添加自动轮播的方法
    function play() {
        num ++;
        for(var i =0;i < imgs.length;i++){
            lis[i].style.backgroundColor = "";
            imgs[i].style.opacity = "";
        }
        if(num > lis.length - 1){
            num = 0;
            lis[num].style.backgroundColor = "#ff8351";
            imgs[num].style.opacity = "1";
        }else {
            lis[num].style.backgroundColor = "#ff8351";
            imgs[num].style.opacity = "1";
        }
    }
    //页面进入时通过定时器自动轮播图片
    var  T = setInterval(play,2000);

    //鼠标移入轮播途中，停止轮播图
    banner.onmouseover = function () {
        clearInterval(T);
    }

    //鼠标移出，开启定时器，图片自动轮播
    banner.onmouseout = function () {
        num = num + 1;
        T = setInterval(play,2000);
    }


    //返回顶部
    $(".top").click(function () {
        $("html,body").animate({scrollTop:0},200);
    });

}

