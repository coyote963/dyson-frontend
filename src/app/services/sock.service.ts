import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {ChatMessage, PrivateMessage} from '../../models/Message'
import { AuthenticationService } from './auth.service'
export enum IOEventName {
    MESSAGE = "MESSAGE",
    REGISTER = "REGISTER",
    PRIVATE_MESSAGE = "PRIVATE_MESSAGE",
}
@Injectable({ providedIn: 'root' })
export class SockService {
    constructor(public socket: Socket, private authService : AuthenticationService) {
        this.socket.emit(IOEventName.REGISTER, { _id : authService.currentUserValue.user._id})
    }
    getMessage() {
        return this.socket.fromEvent<ChatMessage>(IOEventName.MESSAGE)
    }
    getPrivateMessage() {
        return this.socket.fromEvent<PrivateMessage>(IOEventName.PRIVATE_MESSAGE)
    }
    sendMessage(message :ChatMessage) {
        this.socket.emit(IOEventName.MESSAGE,message)
    }

    sendPrivateMessage(message: PrivateMessage) {
        this.socket.emit(IOEventName.PRIVATE_MESSAGE, message)
    }

    destroy() {
        if (this.socket) {
            this.socket.removeAllListeners();
            this.socket.disconnect();
            this.socket = undefined;
        }
    }
}