app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});