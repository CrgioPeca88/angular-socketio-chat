// Depenencies
import { Component } from '@angular/core';

// Assets
import { ChatService } from '@shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent {
  title = 'Componente chat';

  constructor(private  chatService: ChatService) {

  }

}
