const sliders = document.querySelectorAll("div.scroll-horizontal");

sliders.forEach(slider => {
    let state = {
        isDown: false,
        startX: null,
        scrollLeft: null
    };

    slider.addEventListener('mousedown', (e) => {
        state.isDown = true;
        state.startX = e.pageX - slider.offsetLeft;
        state.scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        state.isDown = false;
    });
    slider.addEventListener('mouseup', () => {
        state.isDown = false;
    });
    slider.addEventListener('mousemove', (e) => {
        if (!state.isDown) return;
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - state.startX) * 2; //scroll-fast
        slider.scrollLeft = state.scrollLeft - walk;
    });
});