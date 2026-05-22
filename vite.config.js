import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite dev server middleware to run vercel serverless function locally!
const localApiPlugin = () => ({
  name: 'local-api',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const urlPath = req.url.split('?')[0];
      if (urlPath === '/api/send' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', async () => {
          try {
            const parsedBody = JSON.parse(body);
            const handlerModule = await import('./api/send.js');
            const handler = handlerModule.default;

            const mockReq = {
              method: 'POST',
              body: parsedBody,
              headers: req.headers,
            };

            const mockRes = {
              status(code) {
                res.statusCode = code;
                return this;
              },
              json(data) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
                return this;
              },
              end() {
                res.end();
                return this;
              }
            };

            await handler(mockReq, mockRes);
          } catch (err) {
            console.error('Local API Plugin Error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message || 'Internal local server error' }));
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localApiPlugin()],
})

