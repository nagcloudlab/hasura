const { gql } = require('apollo-server');

const typeDefs = gql`

type Mutation{
  addNewSession(session:SessionInput!):Session!
  deleteSession(id:ID!):Boolean
  toggleFavoriteSession(id:ID):Session 
}
type Query {
    sessions: [Session]
    sessionById(id:ID!):Session,
    speakers:[Speaker]
    speakerById(id:ID!):Speaker
}
input SessionInput{
  title: String!
  description: String
  startsAt: String
  endsAt: String
  room: String
  day: String
  format: String
  track: String
  level: String,
  favorite: Boolean
}

type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
    speakers: [Speaker]
}

type Speaker{
  id:ID!
  bio: String
  name: String,
  sessions: [Session]
}

`;

module.exports = typeDefs
