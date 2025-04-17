function bodyParse(request: any, callback: () => void) {
  let body: string = '';

  request.on('data', (chunk: string) => {
    body += chunk;
  })

  request.on('end', () => {
    body = JSON.parse(body);
    request.body = body;
    callback();
  })
}

module.exports = bodyParse;