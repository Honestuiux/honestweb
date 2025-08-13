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
    }, 1000);
});


// typewrite
// var i = 0;
// var txt = "Loyality-Trust-Honest";
// var speed = 100;
// function type(){
//     if (i < txt.length){
//         document.getElementById("demo").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(type, speed);
//     }
// }
// type()

document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('project-card');
    const circularElement = document.getElementById('circular-element');
    
    // A subtle parallax effect on the circular element on mouse move
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (x - centerX) * 0.02;
        const moveY = (y - centerY) * 0.02;

        circularElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // Reset position when mouse leaves the card
    card.addEventListener('mouseleave', () => {
        circularElement.style.transform = 'translate(0, 0)';
    });
});