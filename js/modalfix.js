$(function () {
    let $buy = $(".cardOptions button.addToCart")

    $buy.on("click", function () {
        let modal = $(this).closest(".mobileProdContent").siblings(".modalWrapper")
        let $modalCounter = modal.find(".modal .cardDesc .itemChanges .counter")
        let $counter = $(this).siblings(".itemChanges").find(".counter")
        let counter = parseInt($counter.text(), 10)
        $(this).siblings(".itemChanges").find(".decrease").removeClass("disable")
        $(this).addClass("active")
        counter++
        $counter.text(counter)
        $modalCounter.text(counter)
        if (counter === 0) {
            $buy.removeClass("active")
        }
        $modalCounter.siblings(".decrease").removeClass("disable")
    })

    $(".cardOptions .itemChanges .decrease").on("click", function () {
        let modal = $(this).closest(".mobileProdContent").siblings(".modalWrapper")
        let $modalCounter = modal.find(".modal .cardDesc .itemChanges .counter")
        let $itemChanges = $(this).closest(".itemChanges")
        let $counter = $itemChanges.find(".counter")
        let $currentBuy = $itemChanges.siblings("button.addToCart")
        let counter = parseInt($counter.text(), 10)
        if (counter > 0) {
            $counter.text(counter)
            $modalCounter.text(counter)
        } else if (counter === 0) {
            $currentBuy.removeClass("active")
            $modalCounter.siblings(".decrease").addClass("disable")
        }
    })
    $(".cardOptions .itemChanges .decrease, .cardOptions .itemChanges .increase").on("click", function () {
        let $itemChanges = $(this).closest(".itemChanges")
        let $counter = $itemChanges.find(".counter")
        let modal = $(this).closest(".mobileProdContent").siblings(".modalWrapper")
        let $modalCounter = modal.find(".modal .cardDesc .itemChanges .counter")
        let counter = parseInt($counter.text(), 10)
        $counter.text(counter)
        $modalCounter.text(counter)
    })
    $(".cardDesc .itemChanges .decrease, .cardDesc .itemChanges .increase, .addToCart").on("click", function () {
        let $modalItemChanges = $(this).closest(".itemChanges")
        let $modalCounter = $modalItemChanges.find(".counter")
        let $buy = $(this).closest(".cardDesc").closest(".modal").closest(".modalWrapper").siblings(".mobileProdContent").find(".cardOptions").find(".addToCart")
        let $itemChanges = $(this).closest(".cardDesc").closest(".modal").closest(".modalWrapper").siblings(".mobileProdContent").find(".cardOptions").find(".itemChanges")
        let $counter = $itemChanges.find(".counter")
        let modalCounter = parseInt($modalCounter.text(), 10)
        $counter.text(modalCounter)
        $modalCounter.text(modalCounter)
        if (modalCounter > 0) {
            $buy.addClass("active")
        } else {
            $buy.removeClass("active")
        }
        $modalCounter.text(modalCounter)
    })
    $(".modal .cardDesc .mobileAddCart").on("click", function () {
        let $modalItemChanges = $(this).siblings(".itemChanges")
        let $modalCounter = $modalItemChanges.find(".counter")
        let $modalDecrease = $modalCounter.siblings(".decrease")
        let modalCounter = parseInt($modalCounter.text(), 10)
        modalCounter++
        $modalCounter.text(modalCounter)
        $modalDecrease.removeClass("disable")
    })
})
