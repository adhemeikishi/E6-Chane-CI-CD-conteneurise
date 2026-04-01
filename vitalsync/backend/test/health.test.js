const http = require('http');
const assert = require('assert');


const app = require('../server');

let server;


server = app.listen(3001, () => {
  http.get('http://localhost:3001/health', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      const body = JSON.parse(data);
      assert.strictEqual(body.status, 'ok');
      console.log('✅ Test passed: /health returns healthy');
      server.close();
      process.exit(0);
    });
  });
});