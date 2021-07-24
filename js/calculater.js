const calculaterBtn = document.querySelector(".fBtn2");
const resetBtn = document.querySelector(".sBtn2");
const weightInput = document.querySelector(".fInp");
const heightInput = document.querySelector(".lastInp");
const reselSite = document.querySelector(".showResult");
const message = document.querySelector(".showMesseass")

function calculateBmi() {
    let height, weight, bmi;
    height = Number(heightInput.value);
    weight = Number(weightInput.value);
    bmi = weight / (height * 0.0254 * height * 0.0254);
    reselSite.textContent = bmi.toFixed(2);
    let msg = showMessegae(bmi);
    message.textContent = msg;
};

function showMessegae(bmiValue) {
    if (bmiValue < 16) {
        return "You are Severe thin "
    } else if (bmiValue >= 16 && bmiValue <= 17) {
        return "You are Modarate Thin"
    } else if (bmiValue > 17 && bmiValue <= 18.5) {
        return "You are Mid Thin"
    } else if (bmiValue > 18.5 && bmiValue <= 25) {
        return "You are Normal"
    } else if (bmiValue > 25) {
        return "You are Overweight"
    }
}

function resultRestart() {
    heightInput.value = "";
    weightInput.value = "";
    reselSite.textContent = "";
    message.textContent = "";
};

function eventHandelar(){
    if(Number(weightInput.value) && Number(heightInput.value)){
        calculateBmi()
    }else {
        alert("Please inter a valide input")
    }
}

calculaterBtn.addEventListener("click", eventHandelar);
resetBtn.addEventListener("click", resultRestart);