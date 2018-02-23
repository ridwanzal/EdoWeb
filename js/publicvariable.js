var imageslist = [
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/deskmodd.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/uclothing.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/edocs.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/palsmart.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/sienger.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/ut.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/warm.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/palembangcom.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/learn.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/karpetjuaro.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/kemilau.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/quickyuda.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/piban.png',
  '/home/ridwanzal/Web_Project/EdoWeb/public_html/myweb/img/work/logo/comnets.png',
];

var globalRes = {
  log: "[Logger] ",
  error: "[Error] ",
  info: "[Info] "
};

var idToOverlay = '.galhover';
var classOverlay = 'overlay';

// this is related
var page = {
  gotop : function(element, buttonclick){
    element = $(element);
    $window.scroll(function(){
      if($(this).scrollTop() > 500){
        element.fadeIn(100);
      }else{
        element.fadeOut(300);
      }
    });
    element.click(function(){
      $("html, body").animate({
        scrollTop : 0
      }, 800);
      return false;
    });
  },
  refresh : function(){
    location.reload();
  },
  opennew : function(){
    // using window.opener() method
  }, 
  // never use this module
  gotoptwo : function(element, buttonclick){
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        element = $(element);
        $window.scroll(function(){
          ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
          if ($(this).scrollTop() > offset_opacity) {
              $back_to_top.addClass('cd-fade-out');
          }
        });
        element.click(function(){
          event.preventDefault();
          $('body, html').animate({
            scrollTop : 0
          }, scroll_top_duration);
        });
  }
}