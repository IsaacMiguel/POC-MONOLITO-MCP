import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Basic middleware for JSON parsing
app.use(express.json());

// Serve static files from frontend build
app.use(express.static(join(__dirname, '../frontend/dist')));

// API routes
app.get('/api/health', (req, res) => {
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