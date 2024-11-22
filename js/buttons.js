$(function () {
    function start() {
        let counter = parseInt($(".counter").text(), 10)
        if (counter < 1) {
            $(".decrease").addClass("disable")
        } else {
            $(".decrease").removeClass("disable")
        }
    }
    start()

    window.decrease = ($c) => {
        let v = parseInt($c.text(), 10)
        if (v > 0) {
            v--
            $c.text(v)
        }
    }

    window.decreaseTo = ($c, min) => {
        let v = parseInt($c.text(), 10)
        if (v > min) {
            v--
            $c.text(v)
        }
    }

    window.increase = ($c) => {
        let v = parseInt($c.text(), 10)
        v++
        $c.text(v)
    }

    window.sync = ($s, $t) => {
        let source = parseInt($s.text(), 10)
        let target = parseInt($t.text(), 10)
        if (source !== target) {
            $t.text(source)
        }
    }

    let $itemChanges = $(".itemChanges")
    $itemChanges.each(function () {
        let $decrease = $(this).find(".decrease")
        let $increase = $(this).find(".increase")
        let $counter = $(this).find(".counter")
        let counter = parseInt($counter.text(), 10)
        if (counter > 0) {
            $decrease.removeClass("disable")
        }
        $decrease.on("click", function() {
            let counter = parseInt($counter.text(), 10)
            if (counter === 0) {
                $(this).addClass("disable")
            }
        })
        $increase.on("click", function() {
            $decrease.removeClass("disable")
        })
    })
})
