const { render } = require('ejs');
const connectDB = require('../config/db');
const { response } = require('express');

const CRUDService = require('../services/CRUDService');
// render all user
exports.getAllUsers = async (req, res) => {
    try {
        const users = await CRUDService.getAllUsers();
        res.render('home', { users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//tao new user
exports.getCreateUserPage = (req, res) => {
    res.render('create.ejs');
};

// Tạo người dùng mới
exports.createUser = async (req, res) => {
    try {
        // Lấy dữ liệu người dùng từ body
        const { firstName, lastName, email, age, address } = req.body;

        // Kiểm tra xem tất cả các trường bắt buộc có tồn tại hay không
        if (!firstName || !lastName || !email || !age || !address) {
            throw new Error('Tất cả các trường đều phải được điền');
        }

        // Gọi service để tạo người dùng mới
        const newUser = await CRUDService.createUser({ firstName, lastName, email, age, address });

        // Redirect về trang home 
        res.redirect('/home');
    } catch (error) {
        console.error("Lỗi khi tạo người dùng:", error);
        res.status(400).json({ message: error.message });
    }
};

// chỉnh sửa người dùng
exports.getEditUserPage = async (req, res) => {
    try {
        const user = await CRUDService.getUserById(req.params.id);
        if (!user) return res.status(404).send("Không tìm thấy người dùng.");
        res.render('edit.ejs', { user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update user

exports.updateUser = async (req, res) => {
    try {
        await CRUDService.updateUser(req.params.id, req.body);


        res.redirect('/home');
    } catch (error) {
        res.status(400).json({ message: error.message });


        res.redirect('/home');
    }
};


// delete user
exports.deleteUser = async (req, res) => {
    try {
        await CRUDService.deleteUser(req.params.id);
        res.redirect('/home');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};