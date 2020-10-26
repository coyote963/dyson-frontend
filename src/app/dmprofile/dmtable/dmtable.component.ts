import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DMPlayer, DMPlayerDetail, Player, Avatar} from '../../player'
import { RestService } from 'src/app/services/rest.service';
import { PlayerLayoutComponent } from 'src/app/dashboard/player-layout/player-layout.component';
import { Title } from '@angular/platform-browser';
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
  constructor(private restService : RestService, private titleService : Title) { }

  ngOnInit(): void {
    this.restService.findDMPlayer(this.playerId).subscribe( player => {
      this.dmPlayer = player
    })
    this.restService.findPlayer(this.playerId).subscribe( player => {
      this.player = player
      this.names = player.name.slice(-5)
      this.titleService.setTitle(`Dyson City - ${this.names[0]} in deathmatch`)
    })
    
  }
  ngOnChanges(): void {
    this.ngOnInit();
  }
}
