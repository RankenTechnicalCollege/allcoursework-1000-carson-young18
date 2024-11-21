"use strict";

$(document).ready(() => {
  
  $("a").each((index, link) => {
    const image = new Image();
    image.src = link.href;
    image.cap = link.title;
  });

  $("a").click( evt => {
    evt.preventDefault();
    const link = evt.currentTarget;
    
    $("#displayImage").attr("src", link.href);
    $("#imageCaption").text(link.title);
  })
});