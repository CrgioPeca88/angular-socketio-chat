// Depenencies
import { Component } from '@angular/core';

// Assets
import { SocketService } from '@shared/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent {
  title = 'Componente chat';

  constructor() {
    
  }

}
