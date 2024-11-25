$(function () {
    $(".catalogueCard").each(function () {
        let $buy = $(this).find(".mobileProdContent .cardOptions button.addToCart")
        let $counter = $buy.siblings(".itemChanges").find(".counter")
        let $decrease = $counter.siblings(".decrease")
        let $increase = $counter.siblings(".increase")
        let $modal = $(this).find(".modalWrapper .modal .cardDesc .itemChanges")
        let $modalBuy = $modal.siblings(".mobileAddCart")
        let $modalCounter = $modal.find(".counter")
        let $modalDecrease = $modal.find(".decrease")
        let $modalIncrease = $modal.find(".increase")
        let $openCart = $(".openCart")

        $buy.on("click", function () {
            $(this).addClass("active")
            increase($counter)
            sync($counter, $modalCounter)
            $decrease.removeClass("disable")
            $modalDecrease.removeClass("disable")
            $openCart.fadeIn(500)
        })
        $modalBuy.on("click", function () {
            increase($modalCounter)
            sync($modalCounter, $counter)
            $decrease.removeClass("disable")
            $modalDecrease.removeClass("disable")
            $buy.addClass("active")
            $openCart.fadeIn(500)
        })
        $decrease.on("click", function () {
            decrease($counter)
            sync($counter, $modalCounter)
            let counter = parseInt($counter.text(), 10)
            if (counter < 1) {
                $buy.removeClass("active")
                $modalDecrease.addClass("disable")
            }
        })
        $increase.on("click", function () {
            increase($counter)
            sync($counter, $modalCounter)
            $decrease.removeClass("disable")
            $modalDecrease.removeClass("disable")
        })
        $modalIncrease.on("click", function () {
            increase($modalCounter)
            sync($modalCounter, $counter)
            $buy.addClass("active")
            $decrease.removeClass("disable")
            $modalDecrease.removeClass("disable")
        })
        $modalDecrease.on("click", function () {
            decrease($modalCounter)
            let modalCounter = parseInt($modalCounter.text(), 10)
            sync($modalCounter, $counter)
            if (modalCounter < 1) {
                $buy.removeClass("active")
            }
        })
    })
})
