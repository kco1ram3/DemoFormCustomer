var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    name: String,
	surname: String, 
	email: String,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users_Test', UsersSchema);