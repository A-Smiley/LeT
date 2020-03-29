window.onload = function(){

    // 导航
    if($("#btnNav")[0]){
        var iponeNav = $("#iponeNav");
        var openNav = false;
        $("#btnNav").on("click",function(){
            if(openNav){
                iponeNav.css("transform","translateX(0)");
            }else{
                iponeNav.css("transform","translateX(-120px)");
            }
            openNav = !openNav;
        })
    }

    // 轮播图
    if($(".swiper-container")[0]){
        var swiperSlide = $(".swiper-slide");
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            // autoplay: true,
            delay: 3000,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })      
    }

    if($(".index-item")[0]){
        var item = $(".index-item .item")
        var ih = item.find('img').eq(0).height();
        item.css("height",ih+"px");
    }





}