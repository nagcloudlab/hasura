const { ApolloServer, ApolloError } = require('apollo-server');

const SessionAPI = require('./datasources/sessions')
const SpeakerAPI = require('./datasources/speakers')


const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const dataSources = () => {
    return {
        sessionAPI: new SessionAPI(),
        speakerAPI: new SpeakerAPI()
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
});


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
