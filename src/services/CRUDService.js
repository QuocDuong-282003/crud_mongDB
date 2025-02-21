const User = require('../models/User');

// lay all user
exports.getAllUsers = async () => {
    try {
        const users = await User.find(); // Lấy tất cả người dùng từ cơ sở dữ liệu
        return users;
    } catch (error) {
        throw new Error('Không thể lấy danh sách người dùng');
    }

};
// Lấy người dùng theo ID
exports.getUserById = async (id) => {
    return await User.findById(id);
};
// create new user
exports.createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
},
    // update user
    exports.updateUser = async (id, userData) => {
        return await User.findByIdAndUpdate(id, userData, { new: true });

    };
// delete user
exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}