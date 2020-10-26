import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {rankNames} from './rankNames'
import { RestService } from 'src/app/services/rest.service'
import { DMPlayer, DMPlayerDetail } from 'src/app/player';


const low = -2;
const high = 30;
const numRanks = 23

@Component({
  selector: 'app-dmbadge',
  templateUrl: './dmbadge.component.html',
  styleUrls: ['./dmbadge.component.scss']
})
export class DmbadgeComponent implements OnInit, OnChanges {

  @Input() playerId : string
  rank : number;
  rankName: string;
  constructor(private restService : RestService) { }

  ngOnInit(): void {
    this.restService.findDMPlayer(this.playerId).subscribe(player => {
      var rating = player.profile.mu - 3 * player.profile.sigma
      this.rank = Math.round((rating - low) * numRanks / (high - low))
      console.log(this.rank)
      this.rankName = rankNames[this.rank]
    })
  }
  ngOnChanges(): void {
    this.ngOnInit()
  }
}
