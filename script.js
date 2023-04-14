var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomColorsButton = document.getElementById("randomColors");
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function setRandomColors() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

function setGradient() {
    document.body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    css.textContent = 'background: ' + document.body.style.background + ';';
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColorsButton.addEventListener("click", setRandomColors);

