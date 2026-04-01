const express = require("express");
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.get("/api/activities", (req, res) => {
  res.json([]);
});
develop
if (require.main === module) {
  app.listen(3000, () => console.log("VitalSync API on :3000"));
}

module.exports = app;
=======

 main
app.get('/api/status', (req, res) => {
  res.json({ status: 'running', version: '1.0.0' });
});

app.listen(3000, () => console.log("VitalSync API on :3000"));