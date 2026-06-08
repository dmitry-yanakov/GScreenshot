const glow = document.getElementById('bg-glow');
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
});


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function copyCode(element, text) {
    navigator.clipboard.writeText(text).then(() => {
        const tooltip = bootstrap.Tooltip.getInstance(element);
        
        element.setAttribute('data-bs-original-title', 'Copied!');
        tooltip.show();

        setTimeout(() => {
            element.setAttribute('data-bs-original-title', 'Copy to clipboard');
            tooltip.hide();
        }, 2000);
    });
}