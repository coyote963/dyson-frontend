import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router'
import { Inbox } from 'src/models/Inbox';
import { AuthenticationService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.sass']
})
export class InboxComponent implements OnInit {
  displayedColumns = [ 'name', 'message', 'date']
  playerInbox : Inbox[]
  constructor(private restService: RestService, private router : Router, private authService : AuthenticationService) { }

  ngOnInit(): void {

    this.restService.findInbox(this.authService.currentUserValue.user._id).subscribe((inbox : Inbox[]) => {
      this.playerInbox = inbox;
    })
  }
}
