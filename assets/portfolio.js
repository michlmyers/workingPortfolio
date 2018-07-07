$(function () {


    // possibly make easeOut - not sure which I prefer yet. 
    function animatePage() {
        var tl = new TimelineMax();
        TweenMax.from('.header', 2.5, { scaleX: 0, scaleY: 0, ease: Bounce.easeIn });
        TweenMax.from('.about', 2.5, { scaleX: 0, scaleY: 0, ease: Elastic.easeOut, delay: 1 });
        TweenMax.staggerFrom('.technologies', 1.5, { scaleX: 0, scaleY: 0, ease: Back.easeIn, delay: 1.5 });

        // TweenMax.from(".header", 3, {scaleX:0, scaleY:0, ease:Elastic.easeIn});
        // TweenMax.from(".about", 2.5, {scaleX:0, scaleY:0, ease:Bounce.easeOut, delay:3.5});
        // TweenMax.staggerFrom("td", 2.5, {scaleX:0, scaleY:0, ease:Back.easeIn, delay:6});
    };

    animatePage();

    window.onscroll = function () { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

});