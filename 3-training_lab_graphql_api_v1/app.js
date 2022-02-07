const { ApolloServer, gql } = require('apollo-server');


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Speaker" type defines the queryable fields for every speaker in our data source.
  type Speaker {
    id: String
    name: String
    bio: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "speakers" query returns an array of zero or more Speakers (defined above).
  
  type Query {
    speakers: [Speaker]
  }


`;


const speakers = [
    {
        "id": "381b010e-f51d-4fca-a249-271f72a6a5b9",
        "bio": "Anim anim cupidatat cupidatat consequat nisi mollit velit officia nulla et eiusmod enim. Irure incididunt non irure in est veniam aliquip fugiat nulla magna et commodo. Culpa nisi magna ullamco ipsum in. Enim nostrud irure do ea dolore deserunt eiusmod pariatur mollit nisi ex minim eiusmod nisi mollit.",
        "sessions": [
            {
                "id": 129718,
                "name": "Batching Vs Streaming"
            }
        ],
        "name": "Macey Duncan"
    },
    {
        "id": "c5e306ae-3f40-4ff0-92a2-503e2f1dc6a1",
        "bio": "Ex amet elit anim qui consectetur fugiat consequat dolor occaecat. Pariatur eu duis dolore do commodo nisi consequat enim est pariatur eiusmod adipisicing esse labore ut. Laborum et ex aliqua esse Lorem aliqua. Mollit nulla nostrud enim ut proident commodo deserunt occaecat ex elit ex est.\nEsse enim nulla dolore sint incididunt enim eu eu aute aliqua laboris deserunt eiusmod. Reprehenderit et proident nisi laborum ex minim velit. Aliqua laboris et nulla laborum amet sint irure ad tempor. Nulla do officia labore. Ut amet aute ex proident. Enim sint aliqua occaecat voluptate adipisicing dolore proident.",
        "sessions": [
            {
                "id": 85318,
                "name": "Azure you want to use AWS IoT?"
            }
        ],
        "name": "Jerome Parker"
    }
]


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        speakers: () => speakers,
    },
};

// The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
