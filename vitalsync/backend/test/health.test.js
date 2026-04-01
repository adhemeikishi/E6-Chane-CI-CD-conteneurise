const http = require("http");
const app = require("../server");

let server;

beforeAll((done) => {
  server = app.listen(0, done);
});

afterAll((done) => {
  server.close(done);
});

describe("GET /health", () => {
  test("doit retourner status ok", (done) => {
    const port = server.address().port;
    http.get(`http://localhost:${port}/health`, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        const json = JSON.parse(body);
        expect(json.status).toBe("ok");
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });
});