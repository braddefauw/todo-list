console.log("this is working still");
import { compareAsc, format } from 'date-fns'

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
console.log(dates.sort(compareAsc));
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]

const icon = document.querySelector(".icon");
const header = document.querySelector(".header");
const background = document.querySelector(".background");
const overlay = document.querySelector('.overlay');
const text = document.querySelector('.text');
icon.addEventListener("click", function(){
  if(icon.src = "./images/icon-sun.svg"){
    header.classList.toggle("light-header");
    background.classList.toggle("light-background");
    overlay.classList.toggle("light-overlay");
    text.classList.toggle("light-text");
  }
  if(header.classList.contains("light-header")){
    icon.src = "./images/icon-moon.svg";
  }else{
    icon.src = "./images/icon-sun.svg";
  }
})