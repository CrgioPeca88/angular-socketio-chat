// Dependencies
import { Injectable } from '@angular/core';

// Assets
import { SocketService } from '@shared/services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private  socketService: SocketService) {}

}
