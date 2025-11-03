async function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (!element) return;
    try {
        const res = await fetch(file, { cache: 'no-cache' });
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        element.innerHTML = await res.text();
    } catch (err) {
        console.error(`Error loading ${file}:`, err);
    }
}

// Load components when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('navbar', 'components/navbar.html');
    loadComponent('footer', 'components/footer.html');
});
