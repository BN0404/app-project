const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specialitySchema = new Schema({
    name: { type: String, required: true },
    sortOrder: Number
})


module.exports = mongoose.model('Speciality', specialitySchema);