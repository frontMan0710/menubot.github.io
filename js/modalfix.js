$(function () {
    let $look = $(".cardOptions button.look")
    let $buy = $(".cardOptions button.addToCart")
    $look.on("mouseenter", function () {
        $(this).find("img").attr("src", "./img/searchHover.svg")
    })
    $look.on("mouseleave", function () {
        $(this).find("img").attr("src", "./img/searchWhite.svg")
    })
    $buy.on("touchstart", function () {
        $(this).find("img").attr("src", "./img/cartHover.svg")
        $(this).css({"background-color":"rgba(255, 255, 255, 1)", "border":"1px rgba(227, 30, 36, 1) solid", "color":"rgba(227, 30, 36, 1)"})
    })
    $buy.on("touchend", function () {
        $(this).find("img").attr("src", "./img/cart.svg")
        $(this).css({"background-color":"rgba(227, 30, 36, 1)", "border":"none", "color":"rgba(255, 255, 255, 1)"})
    })

    $buy.on("click", function () {
        let $counter = $(this).siblings(".itemChanges").find(".counter")
        let counter = parseInt($counter.text(), 10)
        $(this).siblings(".itemChanges").find(".decrease").removeClass("disable")
        $(this).addClass("active")
        counter++
        $counter.text(counter)
        if (counter === 0) {
            $buy.removeClass("active")
        }

    })

    $(".cardOptions .itemChanges .decrease").on("click", function () {
        let $itemChanges = $(this).closest(".itemChanges")
        let $counter = $itemChanges.find(".counter")
        let $currentBuy = $itemChanges.siblings("button.addToCart")
        let counter = parseInt($counter.text(), 10)
        if (counter > 0) {
            $counter.text(counter)
        } else if (counter === 0) {
            $currentBuy.removeClass("active")
        }
    })
})
