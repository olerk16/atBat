const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Player {
    id: ID!
    name: String!
    average: Float!
  }

  type Query {
    players: [Player]
  }

  type Mutation {
    addPlayer(name: String!, average: Float!): Player
  }
`;

module.exports = typeDefs;
