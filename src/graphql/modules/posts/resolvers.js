import Post from '../../../models/Post';
import User from '../../../models/User';

export default {
  Post: {
    author: async   (post) => User.findById(post.author)
  },
  Query: {
    posts: async () => Post.find(),
    post: async  ( _ , { id }) => Post.findById(id),
  },

  Mutation: {
    createPost: ( _ , { data }) => Post.create(data),
    updatePost: ( _ , { id , data }) => Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async   ( _ , { id }) => !!( await Post.findByIdAndDelete(id))
  }
}