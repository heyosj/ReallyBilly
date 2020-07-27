// filter jQuery credit: Bootstrap 3.3.0 Snippet by meetshah

$(document).ready(function() {
  $(".filter-button").click(function() {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function() {
    $("#back-to-top").tooltip("hide");
    $("body,html").animate(
      {
        scrollTop: 0
      },
      800
    );
    return false;
  });

  $("#back-to-top").tooltip("show");
});
