$(() => {
  $(".el-2").dblclick(() => {
    $("h1").css({ color: "red" });
  });

  $(".btn-2").click(() => {
    $("#titulo").fadeOut();
  });

  $(".btn-1").click(() => {
    $("#titulo").fadeIn();
  });

  $(".btn-3").click(() => {
    $("ul").append("<li>new element</li>");
  });
});
