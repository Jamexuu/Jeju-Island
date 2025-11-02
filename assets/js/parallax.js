document.addEventListener("DOMContentLoaded", () => {
    const wavePattern = document.getElementById("wavesPattern");
    if (!wavePattern) return;

    const scrollSpeed = 0.5;
    let lastKnownScrollY = window.scrollY;
    let isTicking = false;

    const renderParallax = () => {
        const offsetX = lastKnownScrollY * scrollSpeed;
        wavePattern.setAttribute("patternTransform", `translate(${-offsetX}, 0)`);
        isTicking = false;
    };

    const onScroll = () => {
        const currentY = window.scrollY;
        if (currentY === lastKnownScrollY) return; // ignore non-vertical-triggered events
        lastKnownScrollY = currentY;
        if (!isTicking) {
            window.requestAnimationFrame(renderParallax);
            isTicking = true;
        }
    };

    // initial position
    renderParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
});