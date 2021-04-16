var tab = 0;

function ShowTab(el) {
    var parent = el.parentNode;
    var index = Array.prototype.indexOf.call(parent.children, el);

    var slider = document.getElementById("body-slider");
    var header = document.getElementById("body-header");

    header.children[tab].classList.remove("selected");
    tab = index;
    header.children[tab].classList.add("selected");

    slider.style.left = "calc(-100% * "+ index +")";
}