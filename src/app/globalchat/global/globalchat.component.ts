import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { SockService } from '../../../app/services/sock.service'
import { Observable } from 'rxjs';
import { ChatMessage } from './../../../models/Message'
import { AuthenticationService } from '../../services/auth.service';
import { RestService } from 'src/app/services/rest.service';
import { playAudio, scrollToBottom } from '../chathelper'
@Component({
  selector: 'app-globalchat',
  templateUrl: './globalchat.component.html',
  styleUrls: ['./globalchat.component.scss']
})
export class GlobalchatComponent implements OnInit, AfterViewChecked {

  constructor(private socketService: SockService, private authService : AuthenticationService, private restService: RestService) { }
  message : Observable<ChatMessage>
  messageList : ChatMessage[] = []
  typedMessage : string
  ngOnInit(): void {
    this.message = this.socketService.getMessage();
    this.typedMessage = ''
    this.message.subscribe((message: ChatMessage) => {
      
      this.messageList.push(message)
      playAudio()
    })
    this.restService.findGlobalChatMessages().subscribe((messages : ChatMessage[]) => {
      this.messageList.push(...messages)
    })
  }

  ngAfterViewChecked() {
    scrollToBottom()
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
    scrollToBottom()
  }

}
