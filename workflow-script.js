document.addEventListener("DOMContentLoaded", () => {
    const elementsWithDelays = [
        { id: "h", delay: 3000 },
        { id: "o", delay: 3100 },
        { id: "n", delay: 3200 },
        { id: "e", delay: 3300 },
        { id: "s", delay: 3400 },
        { id: "t", delay: 3500 }
    ];

    elementsWithDelays.forEach(item => {
        setTimeout(() => {
            const element = document.getElementById(item.id);
            element.classList.add('visible');
        }, item.delay);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const elementsWithDelays = [
        { id: "wf", delay: 3600 },
    ];

    elementsWithDelays.forEach(item => {
        setTimeout(() => {
            const element = document.getElementById(item.id);
            element.classList.add('visibletwo');
        }, item.delay);
    });
});


window.addEventListener("load", function() {  
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 1000);
});
