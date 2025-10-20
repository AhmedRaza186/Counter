i = 0
function counterplus(){
i++
   document.querySelector('h2').innerText = i
}
function counterminus(){
i--
   document.querySelector('h2').innerText = i
}
function reset(){
   document.querySelector('h2').innerText = 0
}