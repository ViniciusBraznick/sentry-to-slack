const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;
const bodyParser = require('./helper/bodyParse');
const routes = require('./routes');

const server = createServer((request: any, response: any) => {
  const route = routes.find(({ endpoint, method }:{ endpoint: string, method: string } ) => (
    endpoint === request.url && method === request.method
  ));

  if(route){
    response.send = (statusCode: number, body: any) => {
      response.writeHead(statusCode, { 'Content-Type': 'applicatin-json' });
      response.end(JSON.stringify(body));
    }

    bodyParser(request, () => route.handler(request, response));
    
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${request.pathname}`)
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
