//DOMCONTENTLOADED exercise
document.addEventListener("DOMContentLoaded", function() {
let onLoad = document.getElementById("onload");

onLoad.innerHTML = "<h1>This is some loaded content</h1>"
})

const directionEl = document.getElementById("direction");


document.addEventListener("keydown", function(event){
    console.log(event);



    directionEl.innerText = `The key that was pressed was ${event.key}`
    directionEl.innerText = `You clicked me!${event.key}`

})


//KeyDown
let buttonEl = document.getElementById("clickMe");

buttonEl.addEventListener("click", function(event){
    console.log(event);
buttonEl.innerText = "you clicked me!";
})
function greet(){
    console.log(Hello);
}


//Click
function handleButtonClick() {
    alert('Button clicked!');


document.body.style.backgroundColor = getRandomRGBColor();
}

function getRandomRGBColor(){
    const r = Math.floor(Math.random() * 256);  
    const g = Math.floor(Math.random() * 256);  
    const b = Math.floor(Math.random() * 256);  
    return `rgb(${r}, ${g}, ${b})`;  
}

const randomColorBtn = document.getElementById('randomColorBtn');

randomColorBtn.addEventListener('click', handleButtonClick);

//Dark Mode
function toggleMode(button) {  
    const body = document.body;  
    // Toggle dark mode class  
    body.classList.toggle("dark-mode");  
    // Change button text based on current mode  
    if (body.classList.contains("dark-mode")) {  
        button.textContent = "Light Mode";  
    } else {  
        button.textContent = "Dark Mode";  
    }  
}  