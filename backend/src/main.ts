// Dependencies
import * as express from 'express';
import { Request, Response } from 'express';
import { createServer } from 'http';
import { Socket, Server } from "socket.io";

// Assets
import { PORT } from './config/constants';

interface ClientData {
  message: string;
}

interface ServerData {
  message: string;
  description: string;
}

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
  console.log(`> Nuevo usuario conectado. [id: ${socket.id}]`)
  socket.on("testServer", (data: ClientData) => {
    console.log(`[SERVER] -> data: ${data.message}`);
    const dataServer: ServerData = {...data, description: "This is a description"};
    socket.emit("testClient", dataServer);
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world! by CrgioPeca88',
  });
});

httpServer.listen(PORT, () => {
  console.log(`====================================`);
  console.log('> Server started at http://localhost:' + PORT);
  console.log(`====================================`);
});
