import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;

  constructor() { }

  setupSocketConnection() {
    const uuidRandom = uuidv4();

    this.socket = io(environment.SOCKET_API, {
      transports: ['websocket'],
    });

    // this.socket.emit('success', 'Hello word from ionic/angular');
    this.socket.emit('user_client', uuidRandom);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
