import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { ClanComment } from 'src/models/ClanComment';

@Component({
  selector: 'app-clan-wall',
  templateUrl: './clan-wall.component.html',
  styleUrls: ['./clan-wall.component.scss']
})
export class ClanWallComponent implements OnInit {

  clanId : string;
  typedMessage : string;
  clanComments : ClanComment[];

  constructor(private restService : RestService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.clanId = this.route.snapshot.params.clanId
    this.restService.findClanComment(this.clanId).subscribe(comments => {
      this.clanComments = comments
    })
  }
  playAudio() {
    const audio = new Audio('https://proxy.notificationsounds.com/notification-sounds/for-sure-576/download/file-sounds-1123-for-sure.mp3');
    audio.play();
  } 
  addComment() {
    const cc : ClanComment = {
      sender_id : '5e374d2496058a68afa4f79f',
      date : new Date(),
      message : this.typedMessage,
      username : 'Georgio',
      clan_id : this.clanId
      
    }
    if (this.typedMessage.length > 0 ) {
      this.restService.addClanComment(cc).subscribe(newComment => {
        this.clanComments.push(newComment)
        this.playAudio();
      })
    }
    this.typedMessage = ''
  }

}
