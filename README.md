**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

Используй этот
[шаблон React-проекта](https://github.com/goitacademy/react-homework-template#readme)
как стартовую точку своего приложения.

# Критерии приема

- Создан репозиторий `goit-react-hw-01-components`.
- Компоненты всех заданий рендерятся на одной странице, внутри общего
  контейнера - корневого компонента `<App>`.
- При сдаче домашней работы есть ссылка на репозиторий с исходным кодом проекта.
- В шапке репозитория есть ссылка на живую страницу на `GitHub pages`.
- При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и
  предупреждений.
- Для каждого компонента есть отдельная папка с файлом React-компонента и файлом
  стилей.
- Для компонентов описаны `propTypes`.
- Все что компонент ожидает в виде пропсов, передается ему при вызове.
- Имена компонентов понятные, описательные.
- JS-код чистый и понятный, используется `Prettier`.
- Стилизация выполнена `CSS-модулями` или `Styled Components`, поэтому классы в
  результирующем DOM будут отличаться от примеров.
- Достаточно базовой стилизации приложения, в первую очередь оно должно
  работать, а уже потом быть красивое. Выделяй 20% времени на CSS и 80% на JS.



## Кинопоиск

Создай базовую маршрутизацию для приложения поиска и хранения фильмов. Превью рабочего приложения смотри по ссылке.

API themoviedb.org

Для бекенда используй themoviedb.org API. Необходимо зарегистриваться (можно ввести произвольные данные) и получить API-ключ. В этой работе будут использоваться следующие ендпоинты.

/trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
/search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
/movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
/movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
/movies/get-movie-reviews запрос обзоров для страницы кинофильма.


Маршруты

В приложении должны быть следующие маршруты. Если пользователь зашел по несуществующему маршруту, его необходимо перенаправлять на домашнюю страницу.

'/' - компонент Home, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
/movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
Code Splitting (разделение кода)
Добавь асинхронную загрузку JS-кода для маршрутов приложения используя React.lazy() и <Suspense>.