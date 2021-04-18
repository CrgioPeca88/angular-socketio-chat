// Dependencies
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private ioCli: any;

  constructor() {
    this.ioCli = io(
      "http://localhost:3000", {
        withCredentials: true,
        autoConnect: true
      }
    );
  }

  getSaludo(): void {
    console.log("Socket service works!");
  }

}
