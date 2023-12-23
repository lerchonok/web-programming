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

    // Находим все ссылки меню
    var menuLinks = document.querySelectorAll(".h2");

    // Проходим по всем ссылкам меню
    menuLinks.forEach(function (link) {
        // Получаем путь из атрибута href
        var linkPath = link.getAttribute("href");

        // Проверяем, соответствует ли текущий путь ссылке меню
        if (currentPath === linkPath) {
            link.classList.add("active");
        } else {
            link.classList.add("inactive");
        }

        // Добавляем обработчик события для состояния hover
        link.addEventListener("mouseover", function () {
            link.classList.remove("inactive");
        });

        // Добавляем обработчик события для состояния hover
        link.addEventListener("mouseout", function () {
            if (currentPath !== linkPath) {
                link.classList.add("inactive");
            }
        });
    });
});
