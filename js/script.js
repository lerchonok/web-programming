let button = document.querySelector('.h2');

button.onclick = function() {
    document.location='womenSide.html'
}

document.addEventListener('DOMContentLoaded', function () {
    // Получение контейнера для альбома фотографий
    const albumContainer = document.getElementById('album-container');

    // Загрузка данных с JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => {
            // Скрытие preloader
            // Можно добавить собственную анимацию
            console.log('Data loaded:', data);

            // Фильтрация данных (псевдо-случайная)
            const filteredData = data.filter(photo => photo.id >= 100);

            // Рендер альбома фотографий
            renderAlbum(filteredData, albumContainer);
        })
        .catch(error => {
            // Обработка ошибок
            console.error('Error:', error);
            // Отображение сообщения об ошибке
            albumContainer.innerHTML = '<h6>⚠ Что-то пошло не так</h6>';
        });
});

// Функция для рендера альбома фотографий
function renderAlbum(albumData, container) {
    let albumHtml = '<h4>Альбом фотографий</h4>';
    albumData.forEach(photo => {
        albumHtml += `
            <div class="photo-item">
                <img src="${photo.thumbnailUrl}" alt="${photo.title}">
                <h6>${photo.title}</h6>
            </div>
        `;
    });

    // Вставка HTML в контейнер
    container.innerHTML = albumHtml;
}