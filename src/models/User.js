import mongoose from 'mongoose';


const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: String,
  active: {
    type: Boolean,
    require: true
  }
});

const User = mongoose.model('User',Schema )

// User.createCollection().then(function(collection) {
//   console.log('Collection Uer is created!');
// });

export default  User 