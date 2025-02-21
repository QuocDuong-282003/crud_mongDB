const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true }

}, {
    _id: Number,
    timestamps: true
});
module.exports = mongoose.model('User', userSchema);