// var body  = document.body;
// let slides = document.querySelectorAll('.slide');
// let leftBtn = document.querySelector('#left')
// let rightBtn = document.querySelector('#right')
// let activeSlide = 0;
// function bodyBg(){
//     body.style.backgroundImage = slides[activeSlide].style.backgroundImage
// }
// bodyBg()
// function currentSlide(){
//     slides.forEach(slide =>{
//         slide.classList.remove('active')
//     })
//     slides[activeSlide].classList.add('active')
// }
// rightBtn.addEventListener('click',()=>{

//     activeSlide++;
//     if (activeSlide > slides.length -1) {
//         activeSlide = 0;
//     }
//     bodyBg();
//     currentSlide();
// })
// leftBtn.addEventListener('click',()=>{

//     activeSlide--;
//     if (activeSlide < 0) {
//         activeSlide = slides.length-1;
//     }
//     bodyBg();
//     currentSlide();
// })




//vezba 2

// let panels = document.querySelectorAll('.panel')
// console.log(typeof(panels));
// panels.forEach((panel)=>{
//    panel.addEventListener('click',()=>{
//     removeActiveClass();
//     panel.classList.add("active");
//    })
// })


// const removeActiveClass = function(){
//     panels.forEach((panel)=>{
//           panel.classList.remove("active")
//     })
// }



// vezba 3
// let timeDiv = document.querySelector('.time');
// let startBtn = document.querySelector('#start');
// let stopBtn = document.querySelector('#stop');
// let resetBtn = document.querySelector('#reset');

// let seconds = 0;
// let interval;
// var stopwatch = function(){
// seconds++;

// let hours = Math.floor(seconds / 3600)
// let minutes = Math.floor((seconds - hours * 3600)/60)
// let sec = seconds % 60;
// sec < 10 ? sec = `0${sec}`: sec;
// minutes < 10 ? minutes = `0${minutes}`: minutes;
// hours < 10 ? hours = `0${hours}`: hours;

// timeDiv.innerHTML = `${hours}:${minutes}:${sec}`;

// }
// var start = function(){
//     if (interval) {
//         return;
//     }
//   interval =setInterval(stopwatch,1000)
// }
// var stop = function(){
//     clearInterval(interval);
//     interval = null;
// }
// var reset = function(){
//     stop();
//     seconds = 0;
//     timeDiv.innerHTML = "00:00:00";  
// }
// startBtn.addEventListener('click',start);
// stopBtn.addEventListener('click',stop)
// resetBtn.addEventListener('click',reset)


//vezba 4

let textDiv = document.querySelector('#main_text');
let speedEl = document.querySelector('#speed');
let text = "Jas se vikam Petar Nikoloski";
let i = 1;
let speed = 1000;

var writeText = function(){
textDiv.innerHTML = text.slice(0, i);
i++;

if (i > text.length){
  i = 1;
}
console.log(speed);
setTimeout(writeText,speed)
}
writeText();

speedEl.addEventListener('input',(e)=>{
speed = 1000 / e.target.value;
})