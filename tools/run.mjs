import express from 'express';
import { resolve } from 'path';
const PORT = process.env.PORT ?? 4200;
const ROOT = process.env.ROOT ?? 'dist/client';
const app = express();
app.use(express.static(resolve(ROOT)));

const started = app.listen(PORT, () => console.log('listening on', PORT));

started
  .addListener('error', (e) => console.error(e))
  .addListener('request', (req) => console.log(req.url))
  .addListener('close', (c) => console.log('closed', c))
  .addListener('listening', (c) => console.log('listening', c));
