function createBurst() {
    let animContainer = document.querySelector('.animation_container');
    let burst = document.querySelector('.burst');
    let lines = document.querySelectorAll('.line');

    burst.style.top = Math.random() * innerHeight + 'px';
    burst.style.left = Math.random() * innerWidth + 'px';

    lines.forEach((line) => {
        const colors = ["#ea4335", '#34a853', '#4285f4', '#fbbc05', '#dc18b9', '#ff5a00', '#8621f8', '#ffff1b'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        line.style.background = randomColor;
    })

    let burstClone = burst.cloneNode(true);
    animContainer.appendChild(burstClone);

    setTimeout(() => {
        burstClone.remove();
    }, 8000)
}
setInterval(createBurst, 20);