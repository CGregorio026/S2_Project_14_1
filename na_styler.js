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
}

function randInt(size) {
      return Math.floor(size * Math.random());
}