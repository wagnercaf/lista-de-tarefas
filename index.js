const { ApolloServer} = require("apollo-server");

const {typeDefs, resolvers} = require("graphql/index");

const server = new ApolloServer({    
    typeDefs, resolvers
});

server.listen().then(({URL}) => console.log(URL));
