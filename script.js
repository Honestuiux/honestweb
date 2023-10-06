// CURSOR
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 250);
});

// PRELOADER
window.addEventListener("load", function() {  
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 2000);
});

