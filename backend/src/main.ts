// Dependencies
import * as express from 'express';
import { Request, Response } from 'express';
import { createServer } from 'http';
import { Socket, Server } from "socket.io";

// Assets
import { PORT } from './config/constants';

type OwnerMessage = 'local' | 'remote';

interface ClientData {
  message: string;
  owner: OwnerMessage;
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

  socket.on("serverSendTextMsg", (data: ClientData) => {
    console.log(`[SERVER] -> data: ${data.message}`);
    const dataServer: ClientData = {
      message: `${data.message} mi hermano q tal!`,
      owner: 'remote'
    };
    socket.emit("clientReceiveTextMsg", dataServer);
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
  console.log(`Testing rebase commit 3`);
  console.log(`Testing rebase commit 4`);
  console.log(`Testing rebase commit 5`);
  console.log(`Testing rebase commit 8`);
});
