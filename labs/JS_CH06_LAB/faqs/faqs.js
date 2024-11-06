"use strict";

// the event handler for the click event of each a element
const toggle = evt => {
    const aElement = evt.currentTarget;                 // get the clicked a element
    const divElement = aElement.parentElement.nextElementSibling;     // get a's sibling div

    // aElement.classList.toggle("minus");
    // divElement.classList.toggle("open");
    if (aElement.hasAttribute("class")){
        aElement.removeAttribute("class");
        divElement.removeAttribute("class");
    }
    else{
        aElement.className = "minus";
        divElement.className = "open";
    }

    evt.preventDefault();   // cancel default action of a tag's <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
    // get the a tags
    const aElements = faqs.querySelectorAll("#faqs a");
    // attach event handler for each a tag	    
    for (let aElement of aElements) {
        aElement.addEventListener("click", toggle);
    }
    // set focus on first a tag's <a> tag
    aElements[0].focus();       
});