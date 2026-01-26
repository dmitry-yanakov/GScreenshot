// Анимация свечения фона за курсором
const glow = document.getElementById('bg-glow');
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Запрет контекстного меню (правой кнопки мыши)
    document.addEventListener('contextmenu', event => event.preventDefault());

    // 2. Запрет горячих клавиш
    document.addEventListener('keydown', (e) => {
        // Блокируем Ctrl+C, Ctrl+U (исходный код), Ctrl+S (сохранение), Ctrl+Shift+I (инструменты разработчика)
        if (
            e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 83 || (e.shiftKey && e.keyCode === 73)) 
        ) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Дополнительная защита от перетаскивания (например, картинок)
    document.addEventListener('dragstart', event => event.preventDefault());
});

// Инициализация всех тултипов на странице
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function copyCode(element, text) {
    // Копирование в буфер
    navigator.clipboard.writeText(text).then(() => {
        // Получаем экземпляр тултипа для этой кнопки
        const tooltip = bootstrap.Tooltip.getInstance(element);
        
        // Меняем текст на "Copied!"
        element.setAttribute('data-bs-original-title', 'Copied!');
        tooltip.show();

        // Возвращаем исходный текст через 2 секунды
        setTimeout(() => {
            element.setAttribute('data-bs-original-title', 'Copy to clipboard');
            tooltip.hide();
        }, 2000);
    });
}