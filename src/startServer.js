import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose'

export function startServer({ typeDefs, resolvers }) {

  mongoose.connect("mongodb://localhost:27017/graphql", {
    useNewUrlParser:true,
    useUnifiedTopology: true
  })
  .then(() => console.log('concected in mongoDb'))
  .catch(err => console.log(err));

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => console.log(`Server Started on Port ${url}`));
}

