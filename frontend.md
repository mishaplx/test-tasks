## Frontend

### 1. Регистрация на Cryptorank
Вам нужно зарегистрироваться на [Cryptorank](https://cryptorank.io/)  
После регистрации [сгенерируйте](https://cryptorank.io/profile/api) себе API ключ для запросов


### 2. Высчитать From и To ATH  

ATH (All Time High) – это самое высокое значение цены за все время существования криптовалюты  

Вам нужно высчитать From ATH - на сколько цена монеты упала в процентном соотношении  
и To ATH - на сколько цене монеты нужно вырасти в процентном соотношении, чтобы догнать ATH  

Функцию расчета покрыть тестами.    

API для запроса данных по BTC  
https://tstapi.cryptorank.io/v0/coins/bitcoin    
_Цену вы найдёте в объекте price, а текущий ATH в объекте athPrice   
Используйте цену в USD_

---

### 3. Напишите небольшое SPA
Приложение должно состоять из двух страниц:

1. Конвертер. Где пользователь может конвертировать из одной валюты в другую.  
Пример: https://cryptorank.io/converter
2. Текущие курсы криптовалют.  
На странице пользователь видит таблицу с колонками Name, Price USD, Circulating Supply, Market Cap, Category   
Пример: https://cryptorank.io/watchlist/9a31a11dfe4b    
**Добавить дополнительные колонки From ATH и To ATH используя функцию из п.2**

API для запроса списка криптовалют  
https://api.cryptorank.io/v1/currencies/1?api_key=YOUR_API_KEY   
**YOUR_API_KEY** - это ключ который вы [сгенерировали](https://cryptorank.io/profile/api)


---

**Плюсом будет:**
* Хорошая оптимизация по Pagespeed/Lighthouse
* Тесты ([Jest](https://jestjs.io/ru/))
* Грамотная настройка конфигов проекта

В первую очередь мы смотрим на код и реализацию, а не на UI. Дизайнеры у нас есть =)    
Например нам интересно, как вы реализуете функцию из п.2 и обработаете момент с потерей точности    

**Для реализации используйте:**
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://ru.reactjs.org/)
* [Next.js](https://nextjs.org/)
* [styled-components](https://styled-components.com/)
* [SWR](https://swr.vercel.app/)
