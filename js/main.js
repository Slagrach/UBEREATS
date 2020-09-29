'use strict'

/*let x = (document.documentElement.clientWidth - document.querySelector(".wrapper").clientWidth) / 2;

document.querySelector(".button-up").style.right = x + 16 + "px";

window.onresize = function () {

  let x_onresize = (document.documentElement.clientWidth - document.querySelector(".wrapper").clientWidth) / 2;
  document.querySelector(".button-up").style.right = x_onresize + 16 + "px";

}*/



window.addEventListener('scroll', function () {

    if (pageYOffset > document.documentElement.clientHeight) {
        document.querySelector('.button-up').classList.add("button-up-active");
    } else
        document.querySelector('.button-up').classList.remove("button-up-active");

});



document.querySelector(".button-up").onclick = function () {

    document.querySelector("#h").scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
}



document.querySelector('.language-list').onmousedown = function (event) {
    return false;
}

document.onclick = function (event) {

    if (event.target.closest(".language-list")) return;
    if (!document.querySelector('.ul.hidden')) {
        document.querySelector('.ul').classList.add("hidden");
        document.querySelector('.language-list__img-2.rotate').classList.remove("rotate");
    }

}
document.querySelector(".language-list").onclick = function (event) {

    document.querySelector('.ul').classList.toggle("hidden");
    document.querySelector('.language-list__img-2').classList.toggle("rotate");
}

document.querySelector(".ul").onclick = function (event) {

    let temp = document.querySelector(".language-active").innerHTML;
    document.querySelector(".language-active").innerHTML = event.target.innerHTML;

    event.target.innerHTML = temp;

}

/*----------------------------------------------------------------------------------------------------------------------------*/

'use strict'

document.querySelector(".main-list__title").addEventListener('mousedown', function (event) {

    event.preventDefault();

});

document.querySelector(".main-list__title").addEventListener('click', function () {

    if (document.documentElement.clientWidth > 767) return;

    this.scrollIntoView({
        block: "start",
        behavior: "smooth"
    });

    document.querySelector(".menu").classList.toggle("menu-active");

});

document.querySelector(".main__nav-link").addEventListener('click', function (event) {

    if (event.target.className != "main__nav-link" && event.target.className != "main__nav-link main__nav-link-active") return;

    event.preventDefault();

    for (let li of document.querySelectorAll('.main__nav-link'))
        li.classList.remove("main__nav-link-active");

    event.target.classList.add("main__nav-link-active");

    document.querySelector(".main-list__title>h2").innerHTML = event.target.innerHTML;

    if (document.documentElement.clientWidth > 767) return;

    document.querySelector(".menu").classList.toggle("menu-active");

    document.querySelector(".main-list__title").scrollIntoView({
        block: "start",
        behavior: "smooth"
    });

});


/*--------------------------------------------------------------------------------------------------------*/
