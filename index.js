/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}



/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
<<<<<<< HEAD
function greet(phrase) {
  let time = parseInt(phrase);


    if ( time < 12 ) {
      return "Good Morning";
    }
  if (12 <= time && time <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
=======
function greet(string){
  let newString = string.split(':');
  let militaryTime = (parseInt(newString[0] , 10)  * 100 ) + parseInt(newString[1], 10);
  if (militaryTime < 1200){
    return "Good Morning";
  }else if( 1200 <= militaryTime =< 1700){
      return "Good Afternoon"
    }else if(militaryTime > 1700){
      return "Good Evening";
    }
>>>>>>> 22b76d099124b51bc41c43572bcc492dd95d3abc
}
/* Write your implementation of displayMessage() */

function displayMessage(string){
  let element = document.getElementById('greeting');
  element.innerText = `${string}`;
}
