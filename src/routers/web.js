const express = require('express');
const User = require('../models/User');
const homeController = require('../controller/homeController');
const router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controller/homeController')

// Route danh sách người dùng
router.get('/home', homeController.getAllUsers);

// Route thêm người dùng
router.get('/users/create', homeController.getCreateUserPage);
router.post('/users/create', homeController.createUser);

// Route chỉnh sửa người dùng
router.get('/users/edit/:id', homeController.getEditUserPage);
router.post('/users/update/:id', homeController.updateUser);

// Route xóa người dùng
router.get('/users/delete/:id', homeController.deleteUser);

// Lấy tất cả người dùng (GET)
// router.get('/get-all', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Tạo người dùng mới (POST)
// router.post('/create', async (req, res) => {
//     try {
//         const { firstName, lastName, email, age, address } = req.body;
//         const user = new User({ firstName, lastName, email, age, address });
//         await user.save();
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // Cập nhật người dùng (PUT)
// router.put('/update/:id', async (req, res) => {
//     try {
//         const { firstName, lastName, email, age, address } = req.body;
//         const userById = await User.findByIdAndUpdate(
//             req.params.id,
//             { firstName, lastName, email, age, address },
//             { new: true }
//         );
//         if (!userById)
//             return res.status(404).json({ message: "User not found!" });
//         res.json(userById);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // Xóa người dùng (DELETE)
// router.delete('/delete/:id', async (req, res) => {
//     try {
//         const deleteUser = await User.findByIdAndDelete(req.params.id);
//         if (!deleteUser)
//             return res.status(404).json({ message: "User not found!" });
//         res.json({ message: "User deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

module.exports = router;
