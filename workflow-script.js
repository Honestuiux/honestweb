document.addEventListener("DOMContentLoaded", () => {
    const elementsWithDelays = [
        { id: "h", delay: 2000 },
        { id: "o", delay: 2100 },
        { id: "n", delay: 2200 },
        { id: "e", delay: 2300 },
        { id: "s", delay: 2400 },
        { id: "t", delay: 2500 }
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
        { id: "wf", delay: 2700 },
    ];

    elementsWithDelays.forEach(item => {
        setTimeout(() => {
            const element = document.getElementById(item.id);
            element.classList.add('visibletwo');
        }, item.delay);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const elementsWithDelays = [
        { id: "flowlist1", delay: 3000 },
        { id: "flowlist2", delay: 3100 },
        { id: "flowlist3", delay: 3150 },
        { id: "flowlist4", delay: 3200 },
        { id: "flowlist5", delay: 3250 },
        { id: "flowlist6", delay: 3300 },
        { id: "flowlist7", delay: 3350 },
    ];

    elementsWithDelays.forEach(item => {
        setTimeout(() => {
            const element = document.getElementById(item.id);
            element.classList.add('visiblethree');
        }, item.delay);
    });
});


window.addEventListener("load", function() {  
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 1000);
});
