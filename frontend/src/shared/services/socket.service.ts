// Dependencies
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

interface ServerData {
  message: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private sioCli: any;

  constructor() {
    this.sioCli = io(
      "http://localhost:3000", {
        withCredentials: true,
        autoConnect: true
      }
    );

    this.sioCli.emit("testServer", { message: 'Test message from client'} );

    this.sioCli.on("testClient", (data: ServerData) => {
      alert("From Server: Test OK! ");
      console.log(`Data from server:`, data);
    });

  }

}
