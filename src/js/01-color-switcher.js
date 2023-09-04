const startBtn = document.querySelector('button[data-start]')
const stoptBtn = document.querySelector('button[data-stop]')


let intervalId = null

startBtn.addEventListener("click", () => {
     intervalId = setInterval(() => {
       document.body.style.backgroundColor = getRandomHexColor();
       startBtn.disabled = true
       stoptBtn.disabled = false
  }, 1000);


})
 
stoptBtn.addEventListener("click", () => {
  clearInterval(intervalId)
  startBtn.disabled = false
   stoptBtn.disabled = true
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}




