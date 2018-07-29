$(document).ready(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    }
    new WOW().init();

    $('#picsell-img').hover(() => {
            // over"
            $('#picsell-icon').addClass("show");
            $('#picsell-img').addClass('portfolio-opacity');
        },  () => {
            // out
            $('#picsell-icon').removeClass("show");
            $('#picsell-img').removeClass('portfolio-opacity');
        }
    );
    $('#pawrental-img').hover(() => {
            // over"
            $('#pawrental-icon').addClass("show");
            $('#pawrental-img').addClass('portfolio-opacity');
        }, () => {
            // out
            $('#pawrental-icon').removeClass("show");
            $('#pawrental-img').removeClass('portfolio-opacity');
        }
    );
    $('#portfolio-img').hover(() => {
            // over"
            $('#portfolio-icon').addClass("show");
            $('#portfolio-img').addClass('portfolio-opacity');
        }, () => {
            // out
            $('#portfolio-icon').removeClass("show");
            $('#portfolio-img').removeClass('portfolio-opacity');
        }
    );$('#picsell-icon').hover(() => {
            // over"
            $('#picsell-icon').addClass("show");
            $('#picsell-img').addClass('portfolio-opacity');
        }, () => {
            // out
        }
    );
    $('#pawrental-icon').hover(() => {
            // over"
            $('#pawrental-icon').addClass("show");
            $('#pawrental-img').addClass('portfolio-opacity');
        }, () => {
            // out
        }
    );
    $('#portfolio-icon').hover(() => {
            // over"
            $('#portfolio-icon').addClass("show");
            $('#portfolio-img').addClass('portfolio-opacity');
        }, () => {
            // out
        }
    );
    
});