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
    const REPO_NAME = 'Jeju-Island';
    const isGitHubPages = /github\.io$/i.test(location.hostname);
    const base = isGitHubPages ? `/${REPO_NAME}` : '';

    loadComponent('navbar', `${base}/components/navbar.html`);
    loadComponent('footer', `${base}/components/footer.html`);
});
