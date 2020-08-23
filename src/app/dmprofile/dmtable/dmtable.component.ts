import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DMPlayer, DMPlayerDetail, Player, Avatar} from '../../player'
import { RestService } from 'src/app/rest.service';
import { PlayerLayoutComponent } from 'src/app/dashboard/player-layout/player-layout.component';
@Component({
  selector: 'app-dmtable',
  templateUrl: './dmtable.component.html',
  styleUrls: ['./dmtable.component.scss']
})
export class DmtableComponent implements OnInit, OnChanges {

  @Input() playerId : string;
  dmPlayer : DMPlayerDetail
  player: Player
  names : string[]
  constructor(private restService : RestService) { }

  ngOnInit(): void {
    this.restService.findDMPlayer(this.playerId).subscribe( player => {
      this.dmPlayer = player
    })
    this.restService.findPlayer(this.playerId).subscribe( player => {
      this.player = player
      this.names = player.name.slice(-5)
    })
    
  }
  ngOnChanges(): void {
    this.ngOnInit();
  }
}
