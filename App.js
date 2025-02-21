const express = require('express');
const path = require('path');// commonjs
const cors = require('cors');
const configViewEngine = require('./src/config/viewEngine');
const userRouter = require('./src/routers/web');
require('dotenv').config();
const connectDB = require('./src/config/db');
const bodyParser = require('body-parser');
// Kết nối cơ sở dữ liệu MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());  // Cấu hình CORS

// Cấu hình template engine (EJS)
configViewEngine(app);
// Sử dụng body-parser để xử lý dữ liệu từ form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Route mặc định
app.get('/', (req, res) => {
    res.send('🚀 Server đang chạy! Chào mừng đến với API của bạn.');
});

// Router API
app.use('/', userRouter);

module.exports = app;
