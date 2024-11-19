import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:3000');
  }

  sendMessage(msg: any) {
    this.socket$.next(msg);
  }

  onMessage() {
    return this.socket$.asObservable();
  }

  close() {
    this.socket$.complete();
  }
}
