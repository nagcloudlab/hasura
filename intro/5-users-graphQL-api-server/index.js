const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type User{
        id: ID
        name: String
        email: String
    }
    type Query{
        users: [User]
        userById(id:ID):User
    }
`;

// const users = [
//     { id: 1, name: "Nag", email: "nag@mail.com" },
//     { id: 2, name: "Abdul", email: "abdul@mail.com" }
// ]

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
})

const resolvers = {
    Query: {
        users: () => {
            let sql = "select * from users";
            return pool.connect()
                .then(client => {
                    return client.query(sql)
                        .then(res => {
                            client.release()
                            return res.rows;
                        })
                        .catch(e => {
                            client.release()
                            console.error('query error', e.message, e.stack)
                        })
                })
        },
        userById: (parent, args, context, info) => {
            let { id } = args
            id = parseInt(id)
            let sql = "select * from users where id=" + id;
            return pool.connect()
                .then(client => {
                    return client.query(sql)
                        .then(res => {
                            client.release()
                            return res.rows[0];
                        })
                        .catch(e => {
                            client.release()
                            console.error('query error', e.message, e.stack)
                        })
                })
        }
    },

};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

