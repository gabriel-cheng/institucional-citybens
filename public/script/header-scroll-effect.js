var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header-container").style.top = "0";
    } else {
        document.getElementById("header-container").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
};