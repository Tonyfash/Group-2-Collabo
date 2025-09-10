const mongoose = require('mongoose');

const vendorSChema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },

},
{
  timestamps: true
});

const userModel = mongoose.model('Vendors', vendorSChema);

module.exports = userModel;