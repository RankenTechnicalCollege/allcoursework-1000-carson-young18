"use strict";

$(document).ready(() => {
  $(document).on("keydown", evt => {
    const links = $("a");
    let currentLink = links.index($(document.activeElement));

    if (evt.key == "ArrowRight"){
      evt.preventDefault();
      links[(currentLink + 1) % links.length].focus();
    }
    else if (evt.key == "ArrowLeft"){
      evt.preventDefault();
      links[(currentLink - 1 + links.length) % links.length].focus();
    }
  });


  $("a").each((index, link) => {
    const image = new Image();
    image.src = link.href;
    image.cap = link.title;
  });

  $("a").click( evt => {
    evt.preventDefault();
  }); 

  $("a").focus( evt => {
    const link = evt.currentTarget;
    
    $("#displayImage").attr("src", link.href);
    $("#imageCaption").text(link.title);
  });

  $("#first").focus();
});