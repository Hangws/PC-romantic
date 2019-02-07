$(document).ready(function(){
  // 3秒后加载中动画消失
  setTimeout(function(){
    $(".onloading").fadeOut();
  },3000)
  setTimeout(function(){
    showButton();
    showText(".content");
    var timer = setInterval(function(){
      showText(".content");
    },5000)
  },3000)
})