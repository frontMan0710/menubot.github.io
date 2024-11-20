$(function () {
    if ($(window).width() < 1120) {
        let $element = $(".openCart").fadeOut(0)
        $(window).on("scroll", function() {
            if (!$element.is(":visible")) {
                $element.fadeIn(500)
                $(window).off("scroll")
            }
        })
    }
})
$(function () {
    $(".lazy").Lazy({
        bind: "event",
        threshold: 0,
        afterLoad: function(element) {
            element.parent().show()
            element.parent().addClass("active")
        }
    })
    /*$(".catalogueCard").on("click", function () {
        var $modal = $(this).find(".modalWrapper")
        if ($modal.length) {
            $("body").addClass("lock")
            $modal.addClass("active")
            $modal.show()
        }
        if ($(".modal.active")) {
            $("a.openCart").removeClass("active")
        }
    })*/
    let $triggs = $(".catalogueCard").find(".look, .prodNameMobile, .catalogueCard, .cardPrev")
    $triggs.on("click", function () {
        var $modal = $(this).closest(".catalogueCard").find(".modalWrapper")
        if ($modal.length) {
            $("body").addClass("lock")
            $modal.addClass("active")
        }
        if ($(".modal.active")) {
            $("a.openCart").removeClass("active")
        }
    })

    $(document).on("click", ".modalWrapper.active .modal .close", function () {
        let $modal = $(this).closest(".modalWrapper")
        $("body").removeClass("lock")
        $modal.removeClass("active")
        if ($modal) {
            $("a.openCart").addClass("active")
        }
    })
    if ($(window).width() < 720) {
        $(".modal .close img").attr("src", "./img/mobileClose.svg")
    }
})