const express = require("express");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const authMiddleware = require('./middleware/auth-middleware');
const graphQlSchema = require("./graphql/schema/index");
const cors = require('cors');
// const isAuth = require("./middleware/is-auth");
const app = express();
app.use(bodyParser.json());


const startApolloServer = async () => {

  const server = new ApolloServer({
    schema: graphQlSchema,
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(3000, () => {
    console.log("Running GraphQL Server....");
  });
};

app.use(cors());
app.use('/', authMiddleware);
startApolloServer();
// db_connection
//   .then(() => {
//     console.log('Server starting at http://localhost:3000/graphql')
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
