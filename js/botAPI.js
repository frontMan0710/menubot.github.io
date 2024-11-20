let tg = window.Telegram.WebApp;

tg.expand()

function applyTelegramTheme() {
    const theme = Telegram.WebApp.themeParams;
    let modal = document.querySelectorAll(".modalWrapper")
    document.body.style.backgroundColor = theme.bg_color;
    modal.style.backgroundColor = theme.bg_color;
    document.body.style.color = theme.text_color;
}
applyTelegramTheme();


