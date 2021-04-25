// Dependencies
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

interface ServerData {
  message: string;
  description: string;
}

type OwnerMessage = 'local' | 'remote';

interface EventsData {}

export interface ChatMessage extends EventsData {
  message: string;
  owner: OwnerMessage;
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
  }

  public emit<M extends EventsData>(event: string, payload: M): any {
    this.sioCli.emit(event, payload);
  }

  public on(event: string): Observable<ChatMessage> {
    return new Observable(observer => {
      this.sioCli.on(event, (remoteMessage: ChatMessage) => {
        observer.next(remoteMessage);
      });
    });
  }

}
