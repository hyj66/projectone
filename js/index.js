window.onload = function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			//console.log(swiper.activeIndex);
			if(swiper.activeIndex==3){
				// $("#longline").style.animation="length 5.4s linear both";
				$(".longline").css('animation','length 2.4s linear both');
			}else{
				$(".longline").css('animation','d');
				
			}
		} 
    });

};

$(function(){
	var playing = true;
	$('.music').bind('click',function(){
		if( playing ){     //如果在播放则点击停止播放，动画为空
			$('.music').css("animation",'ben');
			$('#play')[0].pause();//停止播放
			playing = false;//把状态改为不播放，且图片也没有动画事件
		}else{ //否则如果不在播放则点击开始加载播放，开启动画
			$('.music').css("animation",'music 2s linear infinite');
			$('#play')[0].play();//播放
			playing = true; //开启动画和音乐后状态就是自动播放音乐和图片效果
		}
	});

})