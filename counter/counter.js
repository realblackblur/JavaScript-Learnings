const count = document.querySelector("#count");
const decrementBtn = document.querySelector("#decrementBtn");
const incrementBtn = document.querySelector("#incrementBtn");
const resetBtn = document.querySelector("#resetBtn");
const message = document.querySelector("#message");

let currentCount = 0;

const updateDisplay = () => {
    count.textContent = currentCount;
    message.textContent = "";
    if (currentCount >= 5) {
            count.style.color = "green";
        } else {
            count.style.color = "black";
        }
}

decrementBtn.addEventListener("click", () => {
    if (currentCount <= 0) {
        message.textContent = "Minimum reached";
    } else {
        currentCount--;
        updateDisplay();
    }
});

incrementBtn.addEventListener("click", () => {
    currentCount++;
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
    currentCount = 0;
    updateDisplay();
});