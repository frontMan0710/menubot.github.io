let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.color = "#E31E24";
tg.MainButton.textColor = "#FFFFFF";

let item = "";

let prod1 = document.getElementById("prod1");
let prod2 = document.getElementById("prod2");
let prod3 = document.getElementById("prod3");
let prod4 = document.getElementById("prod4");
let prod5 = document.getElementById("prod5");
let prod6 = document.getElementById("prod6");
let prod7 = document.getElementById("prod7");
let prod8 = document.getElementById("prod8");
let prod9 = document.getElementById("prod9");
let prod10 = document.getElementById("prod10");
let prod11 = document.getElementById("prod11");
let prod12 = document.getElementById("prod12");

prod1.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`${prod1.previousElementSibling.previousElementSibling.textContent.trim()}`);
        item = "1";
        tg.MainButton.show();
    }
})
prod2.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`${prod1.previousElementSibling.previousElementSibling.textContent.trim()}`);
        item = "2";
        tg.MainButton.show();
    }
})
prod3.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`${prod1.previousElementSibling.previousElementSibling.textContent.trim()}`);
        item = "3";
        tg.MainButton.show();
    }
})
prod4.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`${prod1.previousElementSibling.previousElementSibling.textContent.trim()}`);
        item = "4";
        tg.MainButton.show();
    }
})
prod5.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`${prod1.previousElementSibling.previousElementSibling.textContent.trim()}`);
        item = "5";
        tg.MainButton.show();
    }
})
prod6.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`${prod1.previousElementSibling.previousElementSibling.textContent.trim()}`);
        item = "6";
        tg.MainButton.show();
    }
})
prod7.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`${prod1.previousElementSibling.previousElementSibling.textContent.trim()}`);
        item = "7";
        tg.MainButton.show();
    }
})
prod8.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`${prod1.previousElementSibling.previousElementSibling.textContent.trim()}`);
        item = "8";
        tg.MainButton.show();
    }
})
prod9.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`${prod1.previousElementSibling.previousElementSibling.textContent.trim()}`);
        item = "9";
        tg.MainButton.show();
    }
})
prod10.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`${prod1.previousElementSibling.previousElementSibling.textContent.trim()}`);
        item = "10";
        tg.MainButton.show();
    }
})
prod11.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`${prod1.previousElementSibling.previousElementSibling.textContent.trim()}`);
        item = "11";
        tg.MainButton.show();
    }
})
prod12.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`${prod1.previousElementSibling.previousElementSibling.textContent.trim()}`);
        item = "12";
        tg.MainButton.show();
    }
})

Telegram.WebApp.onEvent("mainButtonClicked", () => {
    tg.sendData(item);
})

