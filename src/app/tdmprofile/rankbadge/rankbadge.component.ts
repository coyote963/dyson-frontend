import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { rankNames } from './rankNames'
const top = 1400;
const bottom = 700;
const numRanks = 23

@Component({
  selector: 'app-rankbadge',
  templateUrl: './rankbadge.component.html',
  styleUrls: ['./rankbadge.component.sass']
})
export class RankbadgeComponent implements OnInit, OnChanges {


  @Input()
  playerId: string;

  rank: number;
  rankName : string;

  constructor(private restService : RestService) { }

  ngOnInit(): void {
    this.restService.findTDMPlayer(this.playerId).subscribe(player => {
      this.rank = Math.round((player.profile.elo - bottom ) * numRanks / (top - bottom))
      this.rankName = rankNames[this.rank];
    })
  }
  ngOnChanges(): void {
    this.ngOnInit();
  }
}
