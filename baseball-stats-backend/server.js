require('dotenv').config();
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

console.log('MONGO_URI:', process.env.MONGO_URI);

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app });
});

mongoose.connect(process.env.MONGO_URI);

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  // Mock real-time updates
  setInterval(() => {
    const players = [
      { name: 'Player 1', average: Math.random().toFixed(3) },
      { name: 'Player 2', average: Math.random().toFixed(3) },
    ];
    ws.send(JSON.stringify(players));
  }, 1000);
});

server.listen(3000, () => console.log('Server listening on port 3000'));
