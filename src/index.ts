const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const routes = require('./routes');

const server = createServer((request: any, response: any) => {
  const route = routes.find(({ endpoint, method }:{ endpoint: string, method: string } ) => (
    endpoint === request.url && method === request.method
  ));

  if(route){

    response.send = (statusCode: number, body: any) => {
      response.writeHead()
    }

    route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('Cannot')
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
