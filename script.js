// Playful interactions for The Sandwich Cafe

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', (e) => {
        // Create a temporary "Yum!" popup at click position
        const popup = document.createElement('div');
        popup.textContent = '😋 YUM!';
        popup.style.position = 'fixed';
        popup.style.left = `${e.clientX}px`;
        popup.style.top = `${e.clientY}px`;
        popup.style.backgroundColor = '#FF00FF';
        popup.style.color = 'white';
        popup.style.padding = window.innerWidth < 768 ? '3px 8px' : '5px 15px';
        popup.style.fontSize = window.innerWidth < 768 ? '0.8rem' : '1rem';
        popup.style.border = '3px solid black';
        popup.style.boxShadow = '4px 4px 0px black';
        popup.style.fontWeight = '900';
        popup.style.pointerEvents = 'none';
        popup.style.zIndex = '1000';
        popup.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
        
        document.body.appendChild(popup);

        // Animate and remove
        let opacity = 1;
        let top = e.clientY;
        const interval = setInterval(() => {
            opacity -= 0.05;
            top -= 2;
            popup.style.opacity = opacity;
            popup.style.top = `${top}px`;
            if (opacity <= 0) {
                clearInterval(interval);
                popup.remove();
            }
        }, 20);

        // Special effect for best seller
        if (item.classList.contains('best-selling')) {
            console.log("Best seller clicked!");
            // We could add more here, but the YUM! popup is already playful
        }
    });
});

// Simple tilt effect simulation on mouse move
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(4px, 4px)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'none';
    });
});