const colors = ["red", "green", "rgb(200, 150, 50)", "#f15025"]; 
const btn = document.getElementById('btn'); 
const color = document.querySelector('.color'); 

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber(); 
    document.body.style.backgroundColor = colors[randomNumber]; 
    color.textContent = colors[randomNumber]; 
}
)

function getRandomNumber(){
return Math.floor(Math.random() * colors.length); 
}