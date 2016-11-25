"use strict";

const Hapi = require('hapi');
const server = new Hapi.Server();
const queries = require('./getPeople.js');
const env = require('env2')('./config.env');


server.connection({
  port: process.env.PORT || 4000
});

const routes = [
  {
    method: 'GET',
    path: '/people',
    handler: (req, reply) => {
      queries.people((error, people) => {
        if (error) console.log('Sorry, no results!', error);
        reply(people);
      });
    }
  },
  {
    method: 'GET',
    path: '/superpowers',
    handler: (req, reply) => {
      queries.superpowers((error, people) => {
        if (error) console.log('Sorry, no results!', error);
        reply(people);
      });
    }
  },
  {
    method: 'GET',
    path: '/ages',
    handler: (req, reply) => {
      queries.ages((error, people) => {
        if (error) console.log('Sorry, no results!', error);
        reply(people);
      });
    }
  },
  {
    method: 'GET',
    path: '/alter',
    handler: (req, reply) => {
      queries.alter((error, people) => {
        if (error) console.log('Sorry, no results!', error);
        reply(people);
      });
    }
  },
  {
    method: 'GET',
    path: '/type',
    handler: (req, reply) => {
      queries.type((error, people) => {
        if (error) console.log('Sorry, no results!', error);
        reply(people);
      });
    }
  }
];

server.route(routes);

server.start(err => {
  if (err) throw err;
  console.log(`server is running on ${server.info.uri}`);
});
