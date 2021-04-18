// Dependencies
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

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

    this.sioCli.emit("testServer");

    this.sioCli.on("testClient", () => {
      alert("From Server: Test OK! ");
    });
  }

}
