// import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the User model
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: Number, required: true }
});

// Create the User model using the schema
const User = mongoose.model('User', UserSchema);

// Export the model
module.exports = User;
