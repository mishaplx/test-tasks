## Frontend

### 1. Регистрация на Cryptorank
Вам нужно зарегистрироваться на [Cryptorank](https://cryptorank.io/)  
После регистрации [сгенерируйте](https://cryptorank.io/profile/api) себе API ключ для запросов


### 2. Высчитать From и To ATH  

ATH (All Time High) – это самое высокое значение цены за все время существования криптовалюты  

Вам нужно высчитать From ATH - на сколько цена монеты упала в процентном соотношении  
и To ATH - на сколько цене монеты нужно вырасти в процентном соотношении, чтобы догнать ATH  

Запросите данные по биткойну, цену вы найдёте в объекте price, а текущий ATH в объекте athPrice   
Используйте цену в USD

API для запроса данных по биткойну  
https://tstapi.cryptorank.io/v0/coins/bitcoin

---

### 3. Напишите небольшое SPA
Приложение должно состоять из двух страниц:

1. Конвертер. Где пользователь может конвертировать из одной валюты в другую.  
Пример: https://cryptorank.io/converter
2. Текущие курсы криптовалют.  
На странице пользователь видит таблицу с колонками Name, Price USD, Circulating Supply, Market Cap, Category   
Пример: https://cryptorank.io/watchlist/9a31a11dfe4b

API для запроса списка криптовалют  
https://api.cryptorank.io/v1/currencies/1?api_key=YOUR_API_KEY   
**YOUR_API_KEY** - это ключ который вы [сгенерировали](https://cryptorank.io/profile/api)


---

**Плюсом будет:**
* Хорошо продуманный интерфейс и внешний вид
* Тесты ([Jest](https://jestjs.io/ru/))
* На второй странице можно реализовать функционал отображения Price в выбранной пользователем валюте

**Для реализации используйте:**
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://ru.reactjs.org/)
* [Next.js](https://nextjs.org/)
* [styled-components](https://styled-components.com/)
* [SWR](https://swr.vercel.app/)
