
(function () {
    setTimeout(init, 500)
})();
function check() {
    return $(".openmenu").length > 0
}
function init() {
    try {
        $(".openmenu").off().click(function (e) {
            $('#q-app').addClass('sidebar-visible')
        })

        $('.SideMenuClose').click(() => $('#q-app').removeClass('sidebar-visible'))

        const swiper1 = new Swiper('.swiper.swiper-1', {
            speed: 400,
            spaceBetween: 100,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-1 .swiper-pagination',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        const swiper2 = new Swiper('.swiper.swiper-2', {
            speed: 400,

            slidesPerGroup: 3,
            slidesPerView: 3,
            loopFillGroupWithBlank: true,

        });
        swiper2.changeLanguageDirection('rtl')
        //   swiper2.disable()

        const swiper3 = new Swiper('.swiper.swiper-3', {
            speed: 400,

            slidesPerGroup: 5,
            slidesPerView: 5,
            loopFillGroupWithBlank: true,
            allowTouchMove: false,

        });
        swiper3.changeLanguageDirection('rtl')
        //   swiper2.disable()
        $("[group]").click((e) => {
            const g = $(e.target).attr('group')
            // swiper2.slideTo((g - 1) * 3);
            swiper3.slideTo((g - 1) * 5);
            $(e.target).parent().find(".q-tab--active").removeClass('text-red q-tab--active')
            $(e.target).addClass('text-red q-tab--active')
        })

        $(".ques .q-item").click(e=>{
            $(".ques .active-forum-tab").removeClass('active-forum-tab')
            $(e.target).parents(".q-item").addClass('active-forum-tab')
            const name = $(e.target).parents('.q-item').find(".room_sub_title ").text()
            $(".q-message-name--received").text(name)
            $(".q-message-text-content > div:eq(0)").text("سلام " + name)
        })
    } catch (error) {
        console.log(error);
    }

}


$(document).on({
    "contextmenu": function (e) {
        console.log("ctx menu button:", e.which); 

        // Stop the context menu
        e.preventDefault();
    },
    "mousedown": function(e) { 
        console.log("normal mouse down:", e.which); 
    },
    "mouseup": function(e) { 
        console.log("normal mouse up:", e.which); 
    }
});

window.onload = function () {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
    document.addEventListener("keydown", function (e) {
        //document.onkeydown = function(e) {
        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            disabledEvent(e);
        }
        // "S" key + macOS
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) {
            disabledEvent(e);
        }
        // "F12" key
        if (event.keyCode == 123) {
            disabledEvent(e);
        }
    }, false);
    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
}