setInterval(() => {
    const titel = document.querySelectorAll("#titelIntro")
    titel.forEach((item) => {
        function getLightColor() {
            let r = Math.floor(Math.random() * 127) + 128;
            let g = Math.floor(Math.random() * 127) + 128;
            let b = Math.floor(Math.random() * 127) + 128;
            return `rgb(${r}, ${g}, ${b})`;
        }
        item.style.color = getLightColor();
    })

}, 1000)
//Bg of randome number
function randomeNumGen() {
    function createMovingNumber() {
        const container = document.querySelector(".number-fall");
        const num = document.createElement("div");
        num.classList.add("number");
        num.textContent = Math.floor(Math.random() * 100) + 1;
        num.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        container.appendChild(num);

        // Random start positions (from all edges of the .number-fall div)
        let edge = Math.floor(Math.random() * 4);
        let startX, startY;
        let containerWidth = container.clientWidth;
        let containerHeight = container.clientHeight;

        if (edge === 0) { // Top
            startX = Math.random() * containerWidth;
            startY = -50;
        } else if (edge === 1) { // Bottom
            startX = Math.random() * containerWidth;
            startY = containerHeight + 50;
        } else if (edge === 2) { // Left
            startX = -50;
            startY = Math.random() * containerHeight;
        } else { // Right
            startX = containerWidth + 50;
            startY = Math.random() * containerHeight;
        }

        num.style.left = `${startX}px`;
        num.style.top = `${startY}px`;

        // Move in circular paths
        gsap.to(num, {
            duration: Math.random() * 3 + 2,
            x: Math.random() * 300 - 150,
            y: Math.random() * 300 - 150,
            rotation: 360,
            repeat: -1,
            ease: "linear"
        });

        // Click effect to remove number
        num.addEventListener("click", () => {
            gsap.to(num, { scale: 0, opacity: 0, duration: 0.5, onComplete: () => num.remove() });
        });
    }

    // Generate numbers inside .number-fall every 700ms
    setInterval(createMovingNumber, 500);
}
randomeNumGen()


const contunueBtn = document.getElementById("Contunue")
contunueBtn.addEventListener('click', () => {
    const landpage = document.getElementById("landpage")
    const wap = document.getElementById("wrapper")
    landpage.style.display = "none"
    wap.style.display = "flex"

})

setInterval(() => {
    const container = document.querySelector(".main-game_bg");
    if (!container) return; // Prevent errors if the container doesn't exist

    const num = document.createElement("div");
    num.classList.add("number");
    num.textContent = Math.floor(Math.random() * 100) + 1;
    num.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    num.style.position = "absolute";
    num.style.left = Math.random() * container.clientWidth + "px";
    num.style.top = Math.random() * container.clientHeight + "px";
    container.appendChild(num);

    gsap.fromTo(num,
        { scale: 0.5, opacity: 0 },
        { scale: 1.5, opacity: 1, duration: 1.5, repeat: -1, yoyo: true, ease: "power1.inOut" }
    );

    num.addEventListener("click", () => {
        gsap.to(num, { scale: 0, autoAlpha: 0, duration: 0.5, onComplete: () => num.remove() });
    });

    setTimeout(() => {
        gsap.to(num, { scale: 0, autoAlpha: 0, duration: 0.5, onComplete: () => num.remove() });
    }, 5000);
}, 700);

