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
var inputed;
var found = false;

window.onload = init;
window.onmouseup = unClicked;

function init() {
   document.querySelectorAll("aside h1")[0].innerHTML = wordSearchTitle;
   document.getElementById("wordTable").innerHTML = drawWordSearch(letterGrid, wordGrid);
   document.getElementById("wordList").innerHTML = showList(wordArray);

   allCells = document.querySelectorAll("table#wordSearchTable td");
   inputed = document.querySelector("#pickedLetters");

   document.querySelector("#showSolution").addEventListener("click", showSolution);

   for (let i = 0; i < allCells.length; i++) {
      allCells[i].addEventListener("mousedown",clicked);
   }
   
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
function clicked(e) {
   /*textContent*/
   e.preventDefault();
   e.target.style.backgroundColor = "blue";
   inputed.value = e.target.textContent;
   for (let i = 0; i < allCells.length; i++) {
      allCells[i].addEventListener("mouseenter",dragged);
   }
}
function dragged(e) {
   if (e.target.style.backgroundColor == "green") {
      inputed.value += e.target.textContent;
   }
   else {
      e.target.style.backgroundColor = "blue";
      inputed.value += e.target.textContent;
   }
}
function unClicked() {
   for (let j = 0; j < wordArray.length; j++) {
      if (inputed.value == wordArray[j]) {
         for (let k = 0; k < allCells.length; k++) {
            if (allCells[k].style.backgroundColor == "blue") {
               allCells[k].style.backgroundColor = "green";
            }
         }
      }
   }
   for (let i = 0; i < allCells.length; i++) {
      allCells[i].removeEventListener("mouseenter",dragged);
      if (allCells[i].style.backgroundColor == "blue") {
         allCells[i].style.backgroundColor = "white";
      }
   }
   inputed.value = ""
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
