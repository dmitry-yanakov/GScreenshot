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
            e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 83 || (e.shiftKey && e.keyCode === 73)) ||
            e.keyCode === 123 // F12
        ) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Дополнительная защита от перетаскивания (например, картинок)
    document.addEventListener('dragstart', event => event.preventDefault());
});