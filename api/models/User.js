const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
  name: {
    type: String,
    requied: true,
  },
  email: {
    type: string,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  verified: {
    type: string,
    required: false
  },
  verificationtoken: string,
  profileImage: String,
  userDesription: {
    type: String,
    default: null
  },
  connection: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  connectionRequest: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  sendConnectionRequest: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  posts: {
    type: mongoose.Schema.Types.ObjectId
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

});

const User = mongoose.model("User", userschema);

module.exports = User;