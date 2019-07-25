$(function () {
    $('.nav-mobile__opener').click(function(){
        $('.nav-mobile').slideDown();
        $('.nav-mobile__opener').css('display', 'none');
      });
      
      $('.close__nav-mobile').click(function(){
        $('.nav-mobile').slideUp();
        $('.nav-mobile__opener').css('display', 'flex');
      });
      
      $(document).click(function(event) {
      if(!$(event.target).closest('.except-close').length) {
        $('.nav-mobile').slideUp();
        $('.nav-mobile__opener').css('display', 'flex');
      } else {}});
    
});