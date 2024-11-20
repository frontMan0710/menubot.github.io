let tg = window.Telegram.WebApp;

tg.expand();

function applyTelegramTheme() {
    const theme = Telegram.WebApp.themeParams;
    const modalElements = document.querySelectorAll(".modalWrapper");

    document.body.style.backgroundColor = theme.bg_color;
    document.body.style.color = theme.text_color;


    if (theme.bg_color === "#000000") {
        document.body.style.color = "#ffffff";
        document.querySelectorAll("*").forEach(element => {
            element.style.color = "#ffffff";
        });
    } else {
        document.body.style.color = "#000000";
        document.querySelectorAll("*").forEach(element => {
            element.style.color = "#000000";
        });
    }
    modalElements.forEach((modal) => {
        modal.style.backgroundColor = theme.bg_color;
        modal.style.color = theme.text_color;
    });

    document.querySelectorAll("button").forEach(element => {
        element.style.backgroundColor = "#E31E24";
        element.style.color = "#FFFFFF";
    });
}
applyTelegramTheme();


