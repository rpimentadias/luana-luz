import { Component } from '@angular/core';
import { WindowRef } from './WindowRef';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Luana Luz';


  constructor(private winRef: WindowRef) {
    // getting the native window obj
    console.log('Native window obj', winRef.nativeWindow);
  }

  sendMessage() {
    console.log({ from: 'sendMessage' })
    this.winRef.nativeWindow.botpressWebChat.sendEvent({ type: "message", text: "Olá..." })
    // this.winRef.nativeWindow.botpressWebChat.sendEvent({
    //   type: "proactive-trigger",
    //   channel: "web",
    //   payload: {
    //     text: "fake message",
    //   },
    // })
    // this.winRef.nativeWindow.botpressWebChat.sendEvent({
    //   type: 'proactive-trigger',
    //   channel: 'web',
    //   payload: {
    //     text: 'Hi, I am Pro active'
    //   }
    // })
  }
}
