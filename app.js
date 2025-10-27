i = 0
j = 0

function counterplus() {
   i++
   document.querySelector('h2').innerText = i
   if (i > 10) {
      j++
      document.querySelector('.laps p').innerText = j
      reset()
   }
   document.querySelector('h2').style.color = 'green'
}
function counterminus() {
   i--
   document.querySelector('h2').innerText = i
    document.querySelector('h2').style.color = 'red'
}
function reset() {
   i = 0
   document.querySelector('h2').innerText = i
      document.querySelector('h2').style.color = 'black'
}
function resetLaps() {
   j = 0
document.querySelector('.laps p').innerText = j
}
