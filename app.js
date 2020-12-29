const container = document.querySelector('#container');

container.addEventListener('mousemove', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

        const span = document.createElement('span');
        span.style.top = y + 'px';
        span.style.left = x + 'px';
        span.style.borderRadius = (Math.random() * 10) * 5 + '%'
        span.style.borderRadius = 50 + '%'
        let spanHeight = span.style.height = Math.random() * 100 + 'px';
        span.style.width = spanHeight;
        let color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        let borderRadius = Math.random() * 5 + 'px';
        span.style.border = `${borderRadius} solid ${color}`;
        span.classList.add('active');
    
        container.appendChild(span);
        setTimeout(() => {
            container.removeChild(span)
        }, 1500);
        
})