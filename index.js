export default {
  async fetch(request) {
    
    const html = `

    <!DOCTYPE html>
    <html lang="zh-CN">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <title>导航页</title>
        
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-touch-fullscreen" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="full-screen" content="yes">
        <!--UC强制全屏-->
        <meta name="browsermode" content="application"> 
        <!--UC应用模式-->
        <meta name="x5-fullscreen" content="true">
        <!--QQ强制全屏-->
        <meta name="x5-page-mode" content="app">
        <!--QQ应用模式-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" id="font-awesome-css" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.0/css/all.min.css?ver=1.1422" type="text/css" media="all">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
        <script src="https://at.alicdn.com/t/font_1230786_ewprpwrczvj.js"></script>
    
        <script src="https://at.alicdn.com/t/c/font_4564527_ve4xjhwn7yl.js"></script>
    
        <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
        
        <!-- <script src="sou.js"></script>
        <link rel='stylesheet' href='style.css'> -->
    </head>
    
    <body>
        <!--视频头部背景-->
        <div class="banner-video">
            <!--视频来自阿里云首页，有需要请自行更换-->
            <!--  <video autoplay loop muted>
                <source src="https://cdn.jsdelivr.net/gh/5iux/uploads/pic/3840-banner.mp4" type="video/mp4">
            </video> -->
            <!--注释掉视频可换成图片版本-->
            <img src="https://cn.bing.com//th?id=OHR.HuntsMesa_JA-JP3140979616_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp" alt=""  class="no-click" >
            <div class="bottom-cover" style="background-image: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(244 248 251 / 0.6) 50%, rgb(244 248 251) 100%);"></div>
        </div>
        <!--topbar开始-->
        <style>

        .no-click {
            pointer-events: none;
        }
            .navbar-toggler svg {
                width: 24px;
                height: 24px;
            }
            
            .navbar-toggler .bi-list-nested {
                display: none;
            }
            
            .navbar-toggler.collapsed .bi-list-nested {
                display: block;
            }
            
            .navbar-toggler.collapsed .bi-x {
                display: none;
            }
            
            .navbar-toggler .bi-x {
                display: block;
            }
    
    
            /*
    作者:D.Young
    主页：https://blog.5iux.cn/
    github：https://github.com/5iux/5iux.github.io
    日期：2020-09-24
    版权所有，请勿删除
    */
    body{ font-size: 14px; background: #f4f8fb; overflow-x:hidden;  }
    a{text-decoration: none;}
    a:hover{text-decoration: none;}
    svg.icon { width: 14px; height: 14px; margin: 0 5px 0 8px; vertical-align: -0.15em; fill: currentColor; overflow: hidden;}
    /*menu*/
    .navbar-light .navbar-nav .nav-link{ color: #555; }
    .navbar-light .navbar-nav .active .nav-link{ color: #555; }
    .navbar-light .navbar-nav .nav-link:hover{ color: #fff; }
    /* --- search --- */
    #search{width:100%;margin:0; padding: 0 10% 10px; position: relative; z-index: 2000;  border-radius: 5px;}
    #search form{position:relative}
    #search-text{width:100%;height:50px; line-height: 50px; text-indent: 10px; font-size:16px;border-radius:5px;background-color:#fff; border:none; box-shadow: 0 0.5rem 0.625rem #d4d4d44d;transition: 0.3s all linear;}
    #search-text:focus{background: #fff; box-shadow: 0 0px 24px 0 rgba(50, 50, 50, 0.08); border-color: #fff; }
    #search button{position:absolute;top:0;right:0;background:none;border:0; border-radius:20px;width:60px;height:36px;margin:7px 0 0;line-height:36px;border-radius:3px; outline: none;}
    #search button:hover{cursor:pointer}
    #search button i{color:#ddd;font-size:18px}
    .search-group{display:none;padding-left:75px}
    .s-current .search-type{padding-left:0;display:block}
    .s-current{display:block}
    #search-list{position:relative}
    .s-type{position:absolute;top:0;left:0;z-index:13;width:75px}
    .s-type:hover{height:auto}
    .s-type>span{display:block;height:31px;width:75px}
    .s-type-list{display:none;position:absolute;top:31px;padding:9pt 0;width:70px;background:#fff;border-radius:5px;box-shadow:0 9px 20px rgba(0,0,0,.16)}
    .s-type-list:before{position:absolute;top:-1pc;left:20px;content:'';display:block;width:0;height:0;border:10px solid transparent;border-bottom-color:#fff}
    .s-type-list label{display:block;font-size:15px;text-align:center;font-weight:normal;margin-bottom:0;padding:2px 0;cursor:pointer;transition:.3s}
    .s-type-list label:hover{background:rgba(136,136,136,.1)}
    .s-type-list .tile-lg{color:#fff;width:3pc;height:3pc;font-size:1.25rem;line-height:3rem;border-radius:.3rem;display:block;margin:auto}
    .s-type:hover .s-type-list{display:block}
    .type-text{position:absolute;left:0;width:75px;padding-left:9pt;font-size:1pc;line-height:31px}
    /*.type-text:after{content:"\f105";font-family:FontAwesome;margin:0 0 0 15px}*/
    .search-type{white-space:nowrap;margin:0}.search-type label{margin:0}
    .search-type li{display:inline-block; background: rgb(255 255 255 / 0.4); border-radius: 3px 3px 0 0;}
    .search-type li label{display:inline-block;padding:0 11px;font-size:14px;line-height:31px;border-radius:3px 3px 0 0;cursor:pointer}
    .search-type input:checked+label,.search-type input:hover+label{background-color:#fff;}
    #search-text::-webkit-input-placeholder {color: #bbb;}
    #word{ position: absolute; list-style: none; top:55px; left: 0px; width: 100%; background: rgba(259,259,259,0.9); border-radius: 5px; z-index:20000; padding: 15px 10px; box-shadow: 0 0 10px #aaa; }
    #word li{ height:35px; padding: 0 5px; text-indent: 30px; background: url(sou.svg) no-repeat 5px; background-size: 20px;  line-height: 35px; cursor: pointer; font-size: 16px; border-radius: 5px;}
    #word li:hover{ background-color: #ddd;}
    .set-check{margin-top:3px;font-size:9pt}.set-check label{margin-left:3px}
    .set-check input,.set-check label{opacity:0;transition:all .3s ease}
    .search-type li{list-style:none;display:inline-block}
    .mylist{list-style: none; padding:10px 20px; position: relative; z-index: 1000; margin: 20px 0; border-radius: 15px; background: #fff; box-shadow: 0 0.5rem 0.625rem #d4d4d44d}
    .mylist li.col-3{ width: 100px; transition: 0.3s all linear; font-size: 14px; overflow: hidden; padding:10px 0; border-radius: 10px;}
    .mylist li.col-3 svg{ display: block; width: 45px; height: 45px; padding: 8px; background: #fff;border: 1px solid #eee;  border-radius:10px; margin: 0 auto; }
    .mylist li.col-3:hover{ background: #eee; }
    .mylist li.col-3 span{ width: 100%; display: block; height: 26px; line-height: 26px; text-align:center; font-size: 13px; }
    
    .mylist li a {  color: #555; display: block;}
    .mylist li.title{width: 100%; min-width: auto; margin: 0; height: 35px; font-size: 16px; line-height: 33px; padding: 0 20px 0 10px; border-bottom: 1px solid #eee; margin-bottom: 10px;}
    .banner-video {
        position: absolute;
        width: 100%;
        overflow: hidden;
        left: 0; top:0;
        max-height: 750px;
    }
    .banner-video video{width:2048px; float:left; }
    .banner-video img{width:1920px; float:left; }
    .bottom-cover{ width: 100%; height: 50%; position: absolute; bottom:0px; z-index: 10; }
    
    @media screen and (min-width:1200px){
        .mylist li.col-3{ min-width: 132px;}
    }
    @media screen and (min-width:992px) and (max-width:1200px){
        .mylist li.col-3{ min-width: 110px;}
    }
    
    @media screen and (max-width: 992px){
        #he-plugin-simple{ display: none !important; }
        .banner-video video{width:1200px; }
        .banner-video img{width:1200px; }
        div#navbarsExample05 { background: rgba(0, 0, 0, 0.8); padding: 10px 30px; border-radius: 20px;}
    }
    @media screen and (max-width:767px){
        .banner-video video{width:960px; }
        .banner-video img{width:960px; }
        .s-type-list label{padding:5px 0}
        .search-type{overflow:hidden}
        .search-list{height:30px;overflow-y:hidden;overflow-x:scroll;white-space:nowrap}
        .mylist{ border-radius: 8px;}
        .mylist li.col-3{ margin: 5px 0 5px;}
        .mylist li.col-3 svg{ width: 30px; height: 30px; padding: 5px;border-radius: 5px;}
        .mylist li.col-3 span{ font-size: 12px; }
    
    
    }
    @media screen and (max-width:560px){
    }
    
    
    
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-track {
        background: #eee;
        border-radius: 0px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #ddd;
        border-radius: 0px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: #ccc;
    }
    
    ::-webkit-scrollbar-corner {
        background: #ddd;
    }
    .yiyan {
        text-align: center;
        margin-top: -20px; /* 上方外边距 */
        
    }
        </style>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="position: absolute; z-index: 10000;">
            <!-- <a class="navbar-brand" href="/"><img src="https://cdn.jsdelivr.net/gh/5iux/uploads/pic/20200424logo4.svg" height="35" style=" margin-left: -40px;" alt=""></a>
            <button class="navbar-toggler collapsed" style="border: none; outline: none;" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="bi bi-list-nested" fill="currentColor" id="list-nested">
                    <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 015 11h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm-2-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm-2-4A.5.5 0 011 3h10a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"></path>
                </svg><span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" id="x">
                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"></path>
                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"></path>
                    </svg><span>
            </button> -->
            <div class="collapse navbar-collapse" id="navbarsExample05">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="https://b.10999901.xyz/" target="_blant">博客</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/saiLuoJiuTian/" target="_blant">Github</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="https://blog.5iux.cn/about" target="_blant">About</a>
                    </li> -->
                </ul>
                <style>
                    #he-plugin-simple {
                        z-index: 1000;
                    }
                </style>
                <div id="he-plugin-simple"></div>
                <script>
                    WIDGET = {
                        CONFIG: {
                            "modules": "01234",
                            "background": 5,
                            "tmpColor": "4A4A4A",
                            "tmpSize": 14,
                            "cityColor": "4A4A4A",
                            "citySize": 14,
                            "aqiSize": 14,
                            "weatherIconSize": 22,
                            "alertIconSize": 16,
                            "padding": "8px 8px 8px 8px",
                            "shadow": "1",
                            "language": "auto",
                            "borderRadius": 5,
                            "fixed": "false",
                            "vertical": "middle",
                            "horizontal": "center",
                            "key": "acd0fdcab4b9481a98d0f59145420fac"
                        }
                    }
                </script>
                <!--   <script src="https://widget.heweather.net/simple/static/js/he-simple-common.js?v=1.1"></script>-->
            </div>
        </nav>
        <!--topbar结束-->
           <div class="container" style="margin-top: 100px; position: relative; z-index: 100;">
            <!--搜索开始-->
            <div class="yiyan" id="hitokoto">一言文字</div>
              <div id="search" class="s-search">
                <div id="search-list" class="hide-type-list" style="visibility: hidden;" >
                    <div class="search-group group-a s-current" style="padding-left: 20px">
                        <ul class="search-type">
                            <li><input checked="" hidden="" type="radio" name="type" id="type-baidu" value="https://www.baidu.com/s?wd=" data-placeholder="百度一下"><label for="type-baidu"><span style="color:#2100E0">百度</span></label></li>
                 <!--   <li><input hidden="" type="radio" name="type" id="type-google" value="https://www.google.com.hk/search?hl=zh-CN&q=" data-placeholder="谷歌搜索"><label for="type-google"><span style="color:#3B83FA">G</span><span style="color:#F3442C">o</span><span style="color:#FFC300">o</span><span style="color:#4696F8">g</span><span style="color:#2CAB4E">l</span><span style="color:#F54231">e</span></label></li> -->
                           </ul>
                    </div>
                </div>
                <form action="https://www.baidu.com/s?wd=" method="get" target="_blank" id="super-search-fm">
                    <input type="text" id="search-text" class="searchInputsearchInput" placeholder="百度一下" style="outline:0" autocomplete="off">
                    <button id="searchBtn" class="submit" type="submit"><svg style="width: 20px; height: 20px; margin:7px 0; color: #29f;" class="icon" aria-hidden="true">
                            <use xlink:href="#icon-sousuo"></use>
                        </svg><span></button>
                    <ul id="word" style="display: none;"></ul>
                </form>
                <div class="set-check hidden-xs">
                    <input type="checkbox" id="set-search-blank" class="bubble-3" autocomplete="off">
                </div>
            </div> 
            <!--搜索结束-->
    
            <ul class="mylist row">
                <li class="title"><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>搜索引擎</li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.google.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-google"></use>
                        </svg><span>Google</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.baidu.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-icon_baidulogo"></use>
                        </svg><span>百度</span></a></li>
                
            </ul>
            <ul class="mylist row">
                <!------>
                <li class="title"><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-remen"></use>
                    </svg> 个人网站</li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://b.10999901.xyz/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-boke"></use>
    
                        </svg><span>博客</span></a></li>
                
            </ul>
            <ul class="mylist row">
                <!------>
                <li class="title"><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shipin"></use>
                    </svg> 视频媒体</li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://tv.cctv.com/live/index.shtml" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-cctv"></use>
                        </svg><span>CCTV直播</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.youtube.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-youtube"></use>
                        </svg><span>Youtube</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="http://www.acfun.cn/index.html" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-acfun"></use>
                        </svg><span>ACFUN</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.bilibili.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bili"></use>
                        </svg><span>哔哩哔哩</span></a></li>
                        <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.huya.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-huyazhibo"></use>
                        </svg><span>虎牙直播</span></a></li>
             
            </ul>
           
            <!-- <ul class="mylist row">
                <li class="title"><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sheji"></use>
                    </svg>设计视觉</li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://hao.5iux.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-daohang1"></use>
                        </svg><span>设计导航</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.behance.net/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-behance"></use>
                        </svg><span>Behance</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.dribbble.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-dribbble"></use>
                        </svg><span>Dribbble</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.zcool.com.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-zhanku"></use>
                        </svg><span>站酷</span></a></li>
             
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.iconfinder.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-eye"></use>
                        </svg><span>IconFinder</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://uiiiuiii.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiaocheng"></use>
                        </svg><span>优设教程</span></a></li>
            </ul> -->
           
            <ul class="mylist row">
                <li class="title"><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youxiang"></use>
                    </svg>邮箱</li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gmail"></use>
                        </svg><span>Gmail</span></a></li>
             
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://mail.163.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wangyi"></use>
                        </svg><span>网易邮箱</span></a></li>
                
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://mail.qq.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-QQ"></use>
                        </svg><span>QQ邮箱</span></a></li>
                <!-- <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://qiye.aliyun.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-yunyouxiang"></use>
                        </svg><span>阿里邮箱</span></a></li> -->
            </ul>
            <ul class="mylist row">
                <li class="title"><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-ai-tool"></use>
                    </svg>工具</li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://tools.miku.ac/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-ai-tool"></use>
                        </svg><span>Miku工具</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://ip233.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wangluo"></use>
                        </svg><span>IP查询</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://translate.google.cn/?hl=zh-CN" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-fanyi"></use>
                        </svg><span>谷歌翻译</span></a></li>
               
                <!-- <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="http://cubic-bezier.com" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-quxian"></use>
                        </svg><span>贝赛尔曲线</span></a></li> -->
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://5iux.cn/base64/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-base64"></use>
                        </svg><span>Base64</span></a></li>
              
    
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.itdog.cn/ping" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-pingup"></use>
                        </svg><span>站长Ping</span></a></li>
               
                        <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.iconfont.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-keshihua-shiliang"></use>
                        </svg><span>阿里矢量图标</span></a></li>
    
    
        
    
                        <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://chatgpt.com" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-ChatGPT"></use>
                        </svg><span>ChatGPT</span></a></li>
                        
            </ul>
            
            <ul class="mylist row">
                <li class="title"><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-kongzhitai"></use>
                    </svg>开发</li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="http://www.w3school.com.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-h5"></use>
                        </svg><span>W3school</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://github.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-github"></use>
                        </svg><span>Github</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://codepen.io/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-codepen"></use>
                        </svg><span>Codepen</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.52pojie.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-theater-masks"></use>
                        </svg><span>吾爱破解</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://segmentfault.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-msg"></use>
                        </svg><span>SF思否</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://cdnjs.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-cdnjs"></use>
                        </svg><span>CdnJs</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://fontawesome.com/icons?d=gallery&m=free" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-font-awesome"></use>
                        </svg><span>Font A.</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://msdn.itellyou.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-windows"></use>
                        </svg><span>MSDN下载</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://dash.cloudflare.com/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-cloudflare"></use>
                        </svg><span>C. flare</span></a></li>
                <li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="https://www.swiper.com.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-S"></use>
                        </svg><span>Swiper</span></a></li>
            </ul>
           
        </div>
        <!--版权信息开始-->
        <!-- <p class="mt-5 mb-3 text-muted text-center">©2021 by <a href="https://blog.5iux.cn/">5iux</a>. All rights reserved.</p> -->
        <!--
    作者:D.Young
    主页：https://blog.5iux.cn/
    github：https://github.com/5iux/5iux.github.io
    日期：2021-08-02
    版权所有，请勿删除
    -->
        <!--版权信息结束-->
        <!--  <script>
             eval(function(e, t, a, c, i, n) {
            if (i = function(e) {
                    return (e < t ? "" : i(parseInt(e / t))) + (35 < (e %= t) ? String.fromCharCode(e + 29) : e.toString(36))
                }, !"".replace(/^/, String)) {
                for (; a--;) n[i(a)] = c[a] || i(a);
                c = [function(e) {
                    return n[e]
                }], i = function() {
                    return "\\w+"
                }, a = 1
            }
            for (; a--;) c[a] && (e = e.replace(new RegExp("\\b" + i(a) + "\\b", "g"), c[a]));
            return e
        }('!2(){2 g(){h(),i(),j(),k()}2 h(){d.9=s()}2 i(){z a=4.8(\'A[B="7"][5="\'+p()+\'"]\');a&&(a.9=!0,l(a))}2 j(){v(u())}2 k(){w(t())}2 l(a){P(z b=0;b<e.O;b++)e[b].I.1c("s-M");a.F.F.F.I.V("s-M")}2 m(a,b){E.H.S("L"+a,b)}2 n(a){6 E.H.Y("L"+a)}2 o(a){f=a.3,v(u()),w(a.3.5),m("7",a.3.5),c.K(),l(a.3)}2 p(){z b=n("7");6 b||a[0].5}2 q(a){m("J",a.3.9?1:-1),x(a.3.9)}2 r(a){6 a.11(),""==c.5?(c.K(),!1):(w(t()+c.5),x(s()),s()?E.U(b.G,+T X):13.Z=b.G,10 0)}2 s(){z a=n("J");6 a?1==a:!0}2 t(){6 4.8(\'A[B="7"]:9\').5}2 u(){6 4.8(\'A[B="7"]:9\').W("14-N")}2 v(a){c.1e("N",a)}2 w(a){b.G=a}2 x(a){a?b.3="1a":b.16("3")}z y,a=4.R(\'A[B="7"]\'),b=4.8("#18-C-19"),c=4.8("#C-12"),d=4.8("#17-C-15"),e=4.R(".C-1b"),f=a[0];P(g(),y=0;y<a.O;y++)a[y].D("Q",o);d.D("Q",q),b.D("1d",r)}();', 62, 77, "||function|target|document|value|return|type|querySelector|checked||||||||||||||||||||||||||var|input|name|search|addEventListener|window|parentNode|action|localStorage|classList|newWindow|focus|superSearch|current|placeholder|length|for|change|querySelectorAll|setItem|new|open|add|getAttribute|Date|getItem|href|void|preventDefault|text|location|data|blank|removeAttribute|set|super|fm|_blank|group|remove|submit|setAttribute".split("|"), 0, {}));
        </script> -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    
        <script>
            //关键词sug
    $(function() {
        //当键盘键被松开时发送Ajax获取数据
        $('#search-text').keyup(function() {
            var keywords = $(this).val();
            if (keywords == '') { $('#word').hide(); return };
            $.ajax({
                url: 'https://suggestion.baidu.com/su?wd=' + keywords,
                dataType: 'jsonp',
                jsonp: 'cb', //回调函数的参数名(键值)key
                // jsonpCallback: 'fun', //回调函数名(值) value
                beforeSend: function() {
                    // $('#word').append('<li>正在加载。。。</li>');
                },
                success: function(data) {
                    $('#word').empty().show();
                    if (data.s == '') {
                        //$('#word').append('<div class="error">Not find  "' + keywords + '"</div>');
                        $('#word').empty();
                        $('#word').hide();
                    }
                    $.each(data.s, function() {
                        $('#word').append('<li>' + this + '</li>');
                    })
                },
                error: function() {
                    $('#word').empty().show();
                    //$('#word').append('<div class="click_work">Fail "' + keywords + '"</div>');
                    $('#word').hide();
                }
            })
        })
        //点击搜索数据复制给搜索框
        $(document).on('click', '#word li', function() {
            var word = $(this).text();
         
            $('#search-text').val(word);
            $('#word').empty();
            $('#word').hide();
            //$("form").submit();
            $('.submit').trigger('click');//触发搜索事件

        })
        $(document).on('click', '.container,.banner-video,nav', function() {
            $('#word').empty();
            $('#word').hide();
        })

        document.getElementById("super-search-fm").addEventListener("submit", function(event) {
            event.preventDefault(); // 阻止表单提交的默认行为
            // 其他逻辑
          });











        $(document).ready(function(){
            $('#searchBtn').click(function(){
                var query = $('.searchInputsearchInput').val();
                if(query.trim() !== '') {
                    // 拼接百度搜索的URL
                    var searchUrl = 'https://www.baidu.com/s?wd=' + encodeURIComponent(query);
                    // 在新窗口打开搜索结果页面
                    window.open(searchUrl, '_blank');
                }
            });
        });
    })
        </script>
    </body>
    
    </html>





    `;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
