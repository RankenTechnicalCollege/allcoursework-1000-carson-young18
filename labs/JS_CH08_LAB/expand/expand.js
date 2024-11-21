"use strict";

$(document).ready( () => {
  $("a").click( evt => {
    evt.preventDefault();
    const link = evt.currentTarget;
    const paragraph = $(link).prev("div");

    if ($(paragraph).hasClass("collapsed")){
      $(paragraph).removeClass("collapsed");
      $(paragraph).addClass("expanded");
      $(link).text("Show Less");
    }
    else{
      $(paragraph).removeClass("expanded");
      $(paragraph).addClass("collapsed");
      $(link).text("Show More");
    }
  })
});