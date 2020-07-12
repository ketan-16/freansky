$(window).on("load", function () {
  $(".loader").fadeOut();
  $("#preloder").delay(200).fadeOut("slow");
});

/*------------------
      Background Set
  --------------------*/
$(".set-bg").each(function () {
  var bg = $(this).data("setbg");
  $(this).css("background-image", "url(" + bg + ")");
});

//Offcanvas Menu
$(".canvas-open").on("click", function () {
  $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
  $(".offcanvas-menu-overlay").addClass("active");
});

$(".canvas-close, .offcanvas-menu-overlay").on("click", function () {
  $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
  $(".offcanvas-menu-overlay").removeClass("active");
});

// Search model
$(".search-switch").on("click", function () {
  $(".search-model").fadeIn(400);
});

$(".search-close-switch").on("click", function () {
  $(".search-model").fadeOut(400, function () {
    $("#search-input").val("");
  });
});

/*------------------
  Navigation
--------------------*/
// $(".mobile-menu").slicknav({
//   prependTo: "#mobile-menu-wrap",
//   allowParentLinks: true,
// });

// $(document).ready(function () {
//   // SideNav Button Initialization
//   $(".button-collapse").sideNav2();
//   // SideNav Scrollbar Initialization
//   var sideNavScrollbar = document.querySelector(".custom-scrollbar");
//   var ps = new PerfectScrollbar(sideNavScrollbar);
// });

$(".collapse").on("show.bs.collapse", function () {
  $(".dropdownIcon").replaceWith('<i class="fa fa-angle-up dropdownIcon"></i>');
});

$(".collapse").on("hide.bs.collapse", function () {
  $(".dropdownIcon").replaceWith(
    '<i class="fa fa-angle-down dropdownIcon"></i>'
  );
});
