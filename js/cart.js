$(function () {
    function animateNumber($element, start, end, duration) {
        const range = end - start
        const startTime = performance.now()
        function updateNumber(currentTime) {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(elapsedTime / duration, 1)
            const currentNumber = start + range * progress
            $element.text(currentNumber.toFixed(2) + " грн.")
            if (progress < 1) {
                requestAnimationFrame(updateNumber)
            } else {
                $element.text(end.toFixed(2) + " грн.")
            }
        }
        requestAnimationFrame(updateNumber);
    }
    function cartCheck() {
        if ($(".cartItem").length) {
            $(".emptyMessage").hide()
        } else {
            $(".emptyMessage").show()
            $(".deliveryButtons a, .checkout").addClass("disable").on("click", function (event) {
                event.preventDefault()
            })
        }
    }
    function totalPrice() {
        var total = 0
        $(".itemPrice").each(function () {
            var itemPrice = parseFloat($(this).text()) || 0
            total += itemPrice
        })
        let $totalSum = $(".totalSum")
        let currentTotal = parseFloat($totalSum.text()) || 0
        animateNumber($totalSum, currentTotal, total, 600)
    }
    cartCheck()
    totalPrice()
    $(".decrease").on("click", function() {
        let $counter = $(this).siblings(".counter")
        let $price = $(this).closest(".cartItem, [class*='Item']").find(".itemPrice")
        let currency = $price.data("currency")
        let min = parseInt($counter.data("min"))
        let price = parseFloat($price.data("price"))

        decreaseTo($counter, min)
        let counter = parseInt($counter.text(), 10)
        let itemTotal = (price * counter).toFixed(2)
        $price.text(itemTotal + " " + currency + ".")

        if (min && counter <= min || !min && counter < 0) {
            $(this).addClass("disable")
            cartCheck()
        }
        totalPrice()
    })
    $(".increase").on("click", function() {
        let $counter = $(this).siblings(".counter")
        let $price = $(this).closest(".cartItem, [class*='Item']").find(".itemPrice")
        let currency = $price.data("currency")
        let min = parseInt($counter.data("min"))
        let price = parseFloat($price.data("price"))

        increase($counter)
        let counter = parseInt($counter.text(), 10)

        var itemTotal = (price * counter).toFixed(2)
        $price.text(itemTotal + " " + currency + ".")
        if (counter > min) {
            $(this).siblings(".decrease").removeClass("disable")
        }
        totalPrice()
    })
    let $trash = $(".cartItem").find(".removeItem")
    $trash.on("click", function () {
        $(this).closest(".cartItem").fadeOut(300, function() {
            $(this).remove()
            cartCheck()
            totalPrice()
        })
    })
    $(".remove").on("click", function () {
        $(this).closest(".cartItem").fadeOut(400, function () {
            $(this).remove()
            cartCheck()
            totalPrice()
        })
    })
})
