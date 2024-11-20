let tg = window.Telegram.WebApp;

tg.expand();

function applyTelegramTheme() {
    const theme = Telegram.WebApp.themeParams;
    const modalElements = document.querySelectorAll(".modalWrapper");

    document.body.style.backgroundColor = theme.bg_color;
    document.body.style.color = theme.text_color;

    modalElements.forEach((modal) => {
        modal.style.backgroundColor = theme.bg_color;
        modal.style.color = theme.text_color;
    });
    document.querySelectorAll("*").forEach(element => {
        element.style.color = theme.text_color;
        element.style.backgroundColor = theme.bg_color;
    });
    document.querySelectorAll("button").forEach(element => {
        element.style.backgroundColor = "#E31E24";
    });
}
applyTelegramTheme();


