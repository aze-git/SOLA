$(function () {

  /////////////////////////
  //// ヘッダ マウスオーバー時に色を変える
  /////////////////////////

  $('.nav__item-btn').hover(
    function () {
      $(this).find('.nav__item-page').css('color', '#FFB549');
    },
    function () {
      $(this).find('.nav__item-page').css('color', '#000000');
    }
  );

  /////////////////////////
  //// ヘッダのハンバーガーメニューの開閉
  /////////////////////////


  $('.nav-mobile__opener').click(function () {
    $('.nav-mobile').slideDown();
    $('.nav-mobile__opener').css('display', 'none');
  });

  $('.close__nav-mobile').click(function () {
    $('.nav-mobile').slideUp();
    $('.nav-mobile__opener').css('display', 'flex');
  });

  $(document).click(function (event) {
    if (!$(event.target).closest('.except-close').length) {
      $('.nav-mobile').slideUp();
      $('.nav-mobile__opener').css('display', 'flex');
    } else { }
  });

});