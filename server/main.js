import express from 'express';
const app = express();
const port = 3000;

// Basic middleware for JSON parsing
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Health check endpoint
app.get('/health', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
    nodeVersion: process.version,
    memoryUsage: process.memoryUsage(),
  };
  
  try {
    res.status(200).json(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).json(healthcheck);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});