const express = require("express");
const authMiddleware = require('./middleware/auth-middleware');
const graphQlSchema = require("./graphql/schema/index");
var { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
// const isAuth = require("./middleware/is-auth");
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', authMiddleware);
app.use('/graphql', graphqlHTTP({
  schema: graphQlSchema,
  graphiql: true,
}));
app.listen(4000);


// db_connection
//   .then(() => {
//     console.log('Server starting at http://localhost:3000/graphql')
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
