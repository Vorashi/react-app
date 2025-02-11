const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Указываем путь к статическим файлам React-приложения
app.use(express.static(path.join(__dirname, './build')));

// Обрабатываем все GET-запросы и возвращаем index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});