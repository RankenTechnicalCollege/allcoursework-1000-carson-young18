"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");

    // preload images
    const links = $("#image_list").querySelectorAll("a");
    let imageCache = [];

    for (let link of links){
        const image = new Image();
        image.src = link.href;
        imageCache[imageCache.length] = image;
    }

    // attach mouseover and mouseout events for each image
    image1.addEventListener("mouseover", () => {
        image1.src = imageCache[0].src;
    });
    image1.addEventListener("mouseout", () => {
        image1.src = imageCache[2].src;
    });
    image2.addEventListener("mouseover", () => {
        image2.src = imageCache[1].src;
    });
    image2.addEventListener("mouseout", () => {
        image2.src = imageCache[3].src;
    });


    setTimeout(function () {
        image1.src = imageCache[0].src;
        image2.src = imageCache[1].src;
    },1000);

    setTimeout(function () {
        image1.src = imageCache[2].src;
        image2.src = imageCache[3].src;
    },2000);
});
