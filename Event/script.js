let modeBtn = document.querySelector("#mode");
let currentMode = "light";

modeBtn.addEventListener("click", () => {
    if (currentMode === "light") {
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else {
        currentMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
});

