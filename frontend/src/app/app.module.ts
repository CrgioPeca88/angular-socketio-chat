// Dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Assets
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    RootComponent,
    ChatComponent
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
