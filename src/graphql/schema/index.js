const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");



const typesArray = loadFilesSync("./**/*", {
  extensions: ["graphql"],
});
const resolversArray = loadFilesSync("./**/*", {
  extensions: ["resolvers.js"],
});


const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray
  //ordersResolvers
});

module.exports = schema;
