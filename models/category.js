const mongoose = require('mongoose');



const categorySchema = new mongoose.Schema({
    label: { type: String, required: true, unique: true },
    value: { type: String, required: true, unique: true },

}, { timestamps: true });


const Category = mongoose.model('category', categorySchema);

module.exports = Category