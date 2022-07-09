const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema( {
    name: String,
    age: {type: Number, min: 18, index: true},
    country: String,
    contact: String,
} );

module.exports = mongoose.model('User', UserSchema);