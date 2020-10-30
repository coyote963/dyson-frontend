import { Component, OnInit, Input } from '@angular/core';
import { SockService } from '../../../app/services/sock.service'
import { Observable } from 'rxjs';
import { ChatMessage, PrivateMessage } from './../../../models/Message'
import { AuthenticationService } from '../../services/auth.service';
import { RestService } from 'src/app/services/rest.service';
import { Player} from 'src/app/player'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-privatechat',
  templateUrl: './privatechat.component.html',
  styleUrls: ['./privatechat.component.scss']
})
export class PrivatechatComponent implements OnInit {
  recipientId : string

  constructor(private socketService: SockService, 
    private authService : AuthenticationService, 
    private restService : RestService,
    private route : ActivatedRoute
    ) { }

  message : Observable<PrivateMessage>
  messageList : PrivateMessage[] = []
  typedMessage : string;
  recipientProfile : Player;

  ngOnInit(): void {
    this.message = this.socketService.getPrivateMessage();
    this.recipientId = this.route.snapshot.params.playerId
    this.typedMessage = ''
    this.message.subscribe((message: PrivateMessage) => {
      this.messageList.push(message)
    })
    this.restService.findPlayer(this.recipientId).subscribe(player => {
      this.recipientProfile = player
    })
    
  }
  sendMessage(): void {
    const newMessage = {
      from : this.authService.currentUserValue.user._id,
      from_name : this.authService.currentUserValue.user.name[0],
      to : this.recipientId,
      to_name : this.recipientProfile.name[0],
      date : new Date(),
      message : this.typedMessage,
    }
    if (this.typedMessage.length > 0) {
      this.socketService.sendPrivateMessage(newMessage)
    }
    this.typedMessage = ''
  }
}
