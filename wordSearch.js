"use strict";

/*
   
   Word Search Game Script
   
   Global Variables
   
   allCells
      References all of the cells in the word search table
      
   found
      Stores a Boolean value indicating whether the currently
      selected letters represents a word in the word search list.
     
   Function List
   
   function drawWordSearch(letters, words)
      Returns the HTML code for a word search table based on the entries
      in the letters array and the location of the words
      in the words array
      
   showList(list)
      Returns the HTML for code for an unordered list of words based
      on the items in the list array

*/

var allCells;
var found = false;

window.onload = init;

function init() {
   document.querySelectorAll("aside h1")[0].innerHTML = wordSearchTitle;
   document.getElementById("wordTable").innerHTML = drawWordSearch(letterGrid, wordGrid);
   document.getElementById("wordList").innerHTML = showList(wordArray);

   allCells = document.querySelectorAll("table#wordSearchTable td");

   document.querySelector("#showSolution").addEventListener("click", showSolution);
   document.querySelector("#wordSearchTable").addEventListener("mousedown",clicked);
}

function showSolution() {
   for (let i = 0; i < document.querySelectorAll(".wordCell").length; i++) {
      document.querySelectorAll(".wordCell")[i].style.backgroundColor = "lavender";
   }

   for (let j = 0; j < document.querySelectorAll("#wordSearchList").length; j++) {
      document.querySelectorAll("#wordSearchList")[j].style.textDecoration = "line-through";
      document.querySelectorAll("#wordSearchList")[j].style.color = "lightgray";
   }

   alert("Word Search Complete!");
}
function clicked() {
   for (let i = 0; i < document.querySelectorAll("#wordSearchList td").length; i++) {
      document.querySelectorAll("#wordSearchList td")[i].style.userSelect = "false";
   }

   document.querySelector("#wordSearchTable").addEventListener("mouseenter", function () {
      document.querySelector("#wordSearchTable td").style.backgroundColor = "blue";
   })
}

/*============================================================*/

function drawWordSearch(letters, words) {
   var rowSize = letters.length;
   var colSize = letters[0].length;

   var htmlCode = "<table id='wordSearchTable'>";
   htmlCode += "<caption>Word Search</caption>";

   for (var i = 0; i < rowSize; i++) {
      htmlCode += "<tr>";

      for (var j = 0; j < colSize; j++) {
         if (words[i][j] == " ") {
            htmlCode += "<td>";
         } else {
            htmlCode += "<td class='wordCell'>";
         }
         htmlCode += letters[i][j];
         htmlCode += "</td>";
      }

      htmlCode += "</tr>";
   }
   htmlCode += "</table>";

   return htmlCode;
}

function showList(list) {
   var htmlCode = "<ul id='wordSearchList'>";

   for (var i = 0; i < list.length; i++) {
      htmlCode += "<li>" + list[i] + "</li>";
   }

   htmlCode += "</ul>";

   return htmlCode;
}
