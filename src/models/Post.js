import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});
const Post = mongoose.model('Post', Schema);

// Post.createCollection().then(function(collection) {
//   console.log('Collection  Post is created!');
// });

export default  Post 