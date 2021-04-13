// Dependencies
import * as express from 'express';
import { Request, Response } from 'express';
import { createServer } from 'http';

// Assets
import { PORT } from './config/constants';

const app = express();
const httpServer = createServer(app);
const sio = require('socket.io')(httpServer, {
  cors: {
    origin: true,
    credentials: true,
    methods: ['GET', 'POST']
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world! by CrgioPeca888',
  });
});

httpServer.listen(PORT, () => {
  console.log(`====================================`);
  console.log('> Server started at http://localhost:' + PORT);
  console.log(`====================================`);
});
