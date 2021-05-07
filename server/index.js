const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");
//! test comment
const app = express();

// const RootQuery = new GraphQLObjectType({
//     name:"RootQueryType",
//     fields:()=>
// })
// const Mutation = "mutation";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "helloWorld",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "hello World",
      },
    }),
  }),
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

///-----
app.listen(5000, () => console.log("listening to port 5000"));
