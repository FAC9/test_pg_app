"use strict";

const Hapi = require('hapi');
const server = new Hapi.Server();
const getPeople = require('./getPeople.js');
const env = require('env2')('./config.env');


server.connection({
  port: process.env.PORT || 4000
});

const routes = {
  method: 'GET',
  path: '/people',
  handler: (req, reply) => {
    getPeople((error, people) => {
      if (error) console.log('Sorry, no results!', error);
      console.log(people);
      console.log('---------------------');
      reply(people);
    });
  }
}

server.route(routes);

server.start(err => {
  if (err) throw err;
  console.log(`server is running on ${server.info.uri}`);
});
