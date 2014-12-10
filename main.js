/* Box Draw          */
/* by Brian Cottrell */
/* 10-06-2014        */

/*VARIABLES*/
var rows = 75;						//Sets number of rows on drawing board
var columns = 75;					//Sets number of columns on drawing board
var sideLength = (50.0)/columns-0.0;//Edge length of each box
var board = [];						//Create an array to store boxed
var originalColor = '#000000';		//Store a backround color to be temporarily changed
var selectedColor = '#882200';
var docFrag = document.createDocumentFragment();
board.length = rows*columns;		//Make box array large enough to fit the total number of boxes
/*FUNCTIONS*/
//Set up the game board with the specified number of rows and columns
function setBoard(){
	for(var i = 0; i < board.length; i++){
		board[i] = document.createElement('div');
		board[i].classList.add('box');
		board[i].style.padding = sideLength.toString()+'%';
		if(i%columns == 0){
			board[i].classList.add('clearboth');
		}
		docFrag.appendChild(board[i]);
		board[i].addEventListener('mouseover', addFocus, false);
		board[i].addEventListener('mouseleave', removeFocus, false);
	}
	document.getElementsByClassName('outerdiv')[0].appendChild(docFrag);
	document.getElementsByTagName('button')[0].addEventListener('click', changeColor, false);
}
//Change the color of a box to the specified color
function addFocus(){
	originalColor = this.style.backgroundColor;
	this.style.backgroundColor = selectedColor;
}
//Restore the original color
function removeFocus(){
	this.style.backgroundColor = originalColor;
}
//Update the color to value set by the user
function changeColor(){
	selectedColor = document.getElementsByTagName('input')[0].value;
}
/*PROGRAM*/
setBoard();