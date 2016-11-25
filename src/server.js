const hapi = reuire('hapi');
const server = new hapi.Server();

server.connection({
  port: process.env.PORT | 8000;
});

server.start(function(){
  console.log(`Server is running at ${server.info.uri}`);
});
