//AI-top
$(".navbar-btn").click(function () {
  $(".navbar-collapse").toggleClass("show");
});


//AI-tool
// 開起選單
$('.sort-dropdown-btn').click(function(e) {
    $('.sort-dropdown .dropdown-menu').toggleClass('show');
  });
  
  // 切換按鈕文字
  $('.new-to-old').click(function(e) {
    e.preventDefault();
    $('.sort-dropdown .dropdown-menu').toggleClass('show');
    $('.sort-dropdown-btnText').text($(this).text());
  });
  
  $('.old-to-new').click(function(e) {
    e.preventDefault();
    $('.sort-dropdown .dropdown-menu').toggleClass('show');
    $('.sort-dropdown-btnText').text($(this).text());
  });

  // 開起選單
$('.filter-dropdown-btn').click(function(e) {
  $('.filter-dropdown .dropdown-menu').toggleClass('show');
});