// Поиск и замена
import replace from 'gulp-replace'; // npm i gulp-replace -D 
// Обработка ошибок
import plumber from 'gulp-plumber'; // npm i gulp-plumber -D
// Сообщения (подсказки)
import notify from 'gulp-notify'; // npm i gulp-notify -D
// Локальный сервер
import browsersync from 'browser-sync'; // npm i browser-sync -D
// Проверка обновления
import newer from 'gulp-newer'; // npm i gulp-newer -D
// Условное ветвление
import ifPlugin from 'gulp-if'; // npm i gulp-if -D


// Экспортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
};