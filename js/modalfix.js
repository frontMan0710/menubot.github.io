$(function () {
    let $look = $(".cardOptions button.look")
    let $buy = $(".cardOptions button.addToCart")
    $look.on("mouseenter", function () {
        $(this).find("img").attr("src", "./img/searchHover.svg")
    })
    $look.on("mouseleave", function () {
        $(this).find("img").attr("src", "./img/searchWhite.svg")
    })
    $buy.on("mouseenter", function () {
        $(this).find("img").attr("src", "./img/cartHover.svg")
    })
    $buy.on("mouseleave", function () {
        $(this).find("img").attr("src", "./img/cart.svg")
    })
})
