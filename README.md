# POC-MONOLITO-MCP

## Prerequisites

- Node.js v22.16.0 (required)
- npm v10.9.2 (required)

To ensure you're using the correct versions, you can use nvm (Node Version Manager):

```bash
nvm install 22.16.0
nvm use 22.16.0
npm install -g npm@10.9.2
```

## Installation

This is a monorepo project that contains both the frontend (Astro) and the server applications. To install all dependencies, run:

```bash
npm install
```

This will install dependencies for both workspaces (frontend and server) thanks to npm workspaces.

## Development

To run both the frontend and server in development mode simultaneously:

```bash
npm run dev
```

### Running Individual Services

If you want to run services individually:

#### Frontend (Astro)

```bash
npm run dev:frontend
```

The frontend will be available at http://localhost:4321

#### Server

```bash
npm run dev:server
```

The server will be available at http://localhost:3000

## Building for Production

To build the frontend for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```
