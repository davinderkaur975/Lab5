const mongoose = require('mongoose');
const User = require('../models/User');

/* reference passport local mongoose to make modelusable for managing users*/
const passportLocalMongoose = require('passport-local-mongoose');

/* create the model schema */
/* username and passport are included automatically*/
const userSchema = new mongoose.Schema({});
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);