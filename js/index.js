$(document).ready(function () {
  $(".book-detail-list").css("display", "none");
  $(".featured-item").click(function () {
    $(this).children(".book-detail-list").toggle();
  })
})