const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Настройка сервера для обслуживания статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Отдаём файл index.html по запросу
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
