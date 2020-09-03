window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector(".visual");
    const colors = [ "#303030","#404040","#505050","#606060","#707070","#808080","#909090"];

    console.log(sounds);

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
    };
});