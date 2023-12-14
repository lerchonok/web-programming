(function () {
    window.addEventListener('load', function () {
        var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        var loadTimeElement = document.createElement('div');
        loadTimeElement.innerText = 'Время загрузки страницы: ' + loadTime + 'мс';
        document.body.appendChild(loadTimeElement);
    });
})();

document.addEventListener("DOMContentLoaded", function () {
    // Получаем текущий путь страницы
    var currentPath = window.location.pathname;

    // Находим все кнопки меню
    var menuButtons = document.querySelectorAll(".button");

    // Проходим по всем кнопкам меню
    menuButtons.forEach(function (button) {
        // Получаем путь из атрибута data-path
        var buttonPath = button.getAttribute("data-path");

        // Проверяем, соответствует ли текущий путь кнопке меню
        if (currentPath === buttonPath) {
            button.classList.add("active");
        } else {
            button.classList.add("inactive");
        }

        // Добавляем обработчик события для состояния hover
        button.addEventListener("mouseover", function () {
            button.classList.remove("inactive");
        });

        // Добавляем обработчик события для состояния hover
        button.addEventListener("mouseout", function () {
            if (currentPath !== buttonPath) {
                button.classList.add("inactive");
            }
        });
    });
});
