// Dependencies
import * as express from 'express';
import { Request, Response } from 'express';
import { createServer } from 'http';
import { Socket, Server } from "socket.io";

// Assets
import { PORT } from './config/constants';

const app = express();
const httpServer = createServer(app);
const sio = new Server(httpServer, {
  cors: {
    origin: true,
    credentials: true,
    methods: ["GET", "POST"]
  }
});

sio.on("connection", (socket: Socket) => {
  console.log(`> Nuevo usuario conectado. [socket: ${socket}]`)
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
