const Player = require('./models/Player');

const resolvers = {
  Query: {
    players: async () => await Player.find(),
  },
  Mutation: {
    addPlayer: async (_, { name, average }) => {
      const player = new Player({ name, average });
      await player.save();
      return player;
    },
  },
};

module.exports = resolvers;
