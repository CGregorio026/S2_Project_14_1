"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Christian Gregorio
   Date: 4.2.19  

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
// adds an event listener which, upon loading, runs the setStyles function.
window.addEventListener("load", setStyles);

function setStyles() {
      // this sets up a variable which reads the value set by the randInt function
      var styleNum = randInt(5);
      // sets a variable which becomes the link element, and becomes the link element.
      var fancySheet = document.createElement("link");
      // sets the rel attribute to be defined as a stylesheet
      fancySheet.setAttribute("rel", "stylesheet");
      // sets the id of the link element to fancySheet
      fancySheet.setAttribute("id", "fancySheet");
      // links in the stylesheet of the href by the number set by the styleNum random number
      fancySheet.setAttribute('href', 'na_style_' + styleNum + '.css');
      // appends the link to the head of the document.
      document.head.appendChild(fancySheet);

      // creates an element node for the figure element
      var figBox = document.createElement("figure");
      // sets the id of the figbox element
      figBox.setAttribute("id", "styleThumbs");
      // appends the figbox to the div with the id of box
      document.getElementById("box").appendChild(figBox);

      for (var i = 0; i <= 4; i++) {
            // creates an image for each of the items in the array.
            var sheetImg = document.createElement("img");
            // sets attributes of the image node previously identified
            sheetImg.setAttribute("src", "na_small_" + i + ".png");
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");

            // when the sheet image is clicked, it will change the website based on the image presently clicked
            sheetImg.addEventListener('click', function (e) {
                  document.getElementById('fancySheet').setAttribute("href", e.target.alt);
            });
            // appends the sheet image to the figbox
            figBox.appendChild(sheetImg);
      }

      // set up a stylesheet named thumbstyles and appended it to the head
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);

      // attatches css styles to the thumbstyles object to dynamically insert css into the document
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
                  position:absolute; \
                  left: 0px; \
                  bottom: 0px; \
            }", 0);


      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img { \
            outline: 1px solid black; \
            cursor: pointer; \
            opacity: 0.75; \
      }", 1);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
            outline: 1px solid red; \
            opacity: 1.0; \
      }", 2);
}

function randInt(size) {
      return Math.floor(size * Math.random());
}