import { Component, OnInit } from '@angular/core';
import { SockService } from '../../../app/services/sock.service'
import { Observable } from 'rxjs';
import { ChatMessage } from './../../../models/Message'
import { AuthenticationService } from '../../services/auth.service';
@Component({
  selector: 'app-globalchat',
  templateUrl: './globalchat.component.html',
  styleUrls: ['./globalchat.component.scss']
})
export class GlobalchatComponent implements OnInit {

  constructor(private socketService: SockService, private authService : AuthenticationService) { }
  message : Observable<ChatMessage>
  messageList : ChatMessage[] = []
  typedMessage : string
  ngOnInit(): void {
    this.message = this.socketService.getMessage();
    this.typedMessage = ''
    this.message.subscribe((message: ChatMessage) => {
      this.messageList.push(message)
    })
  }
  sendMessage(): void {
    const newMessage = {
      sender_id : this.authService.currentUserValue.user._id,
      date : new Date(),
      message : this.typedMessage,
      username : this.authService.currentUserValue.user.name[0]
    }
    if (this.typedMessage.length > 0) {
      this.socketService.sendMessage(newMessage)
    }
    this.typedMessage = ''
  }
}
