let count = localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;
document.getElementById("counts").textContent = count;

function addCount() {
    count++;
    updateDisplay();
}

function downCount() {
    if (count > 0) {
        count--;
        updateDisplay();
    }
}

function restart() {
    count = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("counts").textContent = count;
    localStorage.setItem("count", count);
}
