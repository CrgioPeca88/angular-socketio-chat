// Dependencies
import { Injectable } from '@angular/core';

// Assets
import { SocketService, ChatMessage } from '@shared/services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socketService: SocketService) {
    this.sendMessage();
    this.watchReceiveMessage();
  }

  public sendMessage(message: string = "Hola como vas!"): any {
    const chatMessage: ChatMessage = {
      message: message,
      owner: 'local'
    };
    this.socketService.emit<ChatMessage>("serverSendTextMsg", chatMessage);
  }

  private watchReceiveMessage(): void {
    this.socketService.on("clientReceiveTextMsg").subscribe((message: ChatMessage) => {
      console.log(`%c Message from server => `,`background-color: orange; color: white`, message);
    });
  }

}
