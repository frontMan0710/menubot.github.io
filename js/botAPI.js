let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.color = "#E31E24";
tg.MainButton.textColor = "#FFFFFF";

let item = "";

Telegram.WebApp.onEvent("mainButtonClicked", () => {
    tg.sendData(item);
})

