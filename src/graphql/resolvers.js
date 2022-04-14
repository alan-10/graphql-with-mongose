import {  mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

const resolverArray = loadFilesSync(path.join(__dirname,'modules','**', 'resolvers.js'));
const resolver = mergeResolvers(resolverArray);

 // console.log(resolver);

export  default resolver ;