// Подключаем express
const express = require('express')

// Присваеваем express к app
const app = express()

// Подключаем PUG
app.use(express.static('public'))

// views, каталог, в котором находятся файлы шаблонов.
app.set("views", "templates");
// Используем шаблонизатор
app.set("view engine", "pug");


// Домашний адрес
app.get('/', (req, res) => {
    res.render('index')
})



// Запускаем сервер на порте 8080
app.listen(8080, () => {
    console.log("Server on  8080 port");
})