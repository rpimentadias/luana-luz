import { Component } from '@angular/core';
import { WindowRef } from './WindowRef';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WindowRef]
})

export class AppComponent {
  title = 'Luana Luz';


  constructor(
    private winRef: WindowRef
  ) {
    // getting the native window obj
    console.log('Native window obj', winRef.nativeWindow);
  }

  sendMessage() {
    this.winRef.nativeWindow.botpressWebChat.sendEvent({ type: "show" });
    this.winRef.nativeWindow.botpressWebChat.sendEvent({ type: "message", text: "Oi... gostaria de reservar horário na agenda" })
  }
}
