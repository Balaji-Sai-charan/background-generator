var css = document.querySelector("h3");
var colorInputsContainer = document.getElementById("colorInputs");
var gradientType = document.getElementById("gradientType");
var randomColorButton = document.getElementById("randomColorButton");
var colorCount = document.getElementById("colorCount");

function setGradient() {
    let colors = Array.from(document.querySelectorAll(".color-input")).map(input => input.value);
    
    let gradientStyle;

    if (gradientType.value === "solid") {
        gradientStyle = colors[0];
    } else if (gradientType.value === "linear") {
        gradientStyle = `linear-gradient(to right, ${colors.join(", ")})`;
    } else if (gradientType.value === "radial") {
        gradientStyle = `radial-gradient(circle, ${colors.join(", ")})`;
    } else if (gradientType.value === "wave") {
        gradientStyle = `repeating-linear-gradient(45deg, ${colors.join(", ")})`;
    }

    document.body.style.background = gradientStyle;
    css.textContent = document.body.style.background + ";";
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateRandomColors() {
    const inputs = document.querySelectorAll(".color-input");
    
    inputs.forEach(input => {
        input.value = getRandomColor();
    });
    
    setGradient();
}

function updateColorInputs() {
    const count = parseInt(colorCount.value);
    
    colorInputsContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const input = document.createElement("input");
        input.type = "color";
        input.className = "color-input";
        input.value = getRandomColor();
        input.addEventListener("input", setGradient);
        
        colorInputsContainer.appendChild(input);
    }

    setGradient();
}

colorCount.addEventListener("change", updateColorInputs);
randomColorButton.addEventListener("click", generateRandomColors);
gradientType.addEventListener("change", setGradient);

updateColorInputs();