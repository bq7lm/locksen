// Можно добавить дополнительную интерактивность здесь
document.addEventListener('DOMContentLoaded', function() {
    // Пример: автоматическая прокрутка чата вниз
    const messagesContainer = document.getElementById('messages-container');
    if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // Пример: AJAX обновление сообщений
    if (window.location.pathname.includes('/chat/')) {
        setInterval(function() {
            const userId = window.location.pathname.split('/').pop();
            fetch(`/api/messages/${userId}`)
                .then(response => response.json())
                .then(messages => {
                    // Обновить интерфейс с новыми сообщениями
                    // (реализация зависит от структуры вашего приложения)
                });
        }, 5000); // Проверять новые сообщения каждые 5 секунд
    }
});