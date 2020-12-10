import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { ClanLeaderboardEntry } from 'src/models/ClanLeaderboardEntry';

@Component({
  selector: 'app-clan-leaderboard',
  templateUrl: './clan-leaderboard.component.html',
  styleUrls: ['./clan-leaderboard.component.sass']
})
export class ClanLeaderboardComponent implements OnInit {

  displayedColumns = ['name', 'clan', 'elo', ]
  elements: ClanLeaderboardEntry[]
  constructor(private restService : RestService) { }

  ngOnInit(): void {
    this.restService.findClanLeaderboard().subscribe(elements => {
      this.elements = elements
    })
  }

}
