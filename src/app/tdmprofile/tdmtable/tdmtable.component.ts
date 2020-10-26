import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { TDMPlayerDetail, Player } from '../../player';

@Component({
  selector: 'app-tdmtable',
  templateUrl: './tdmtable.component.html',
  styleUrls: ['./tdmtable.component.scss']
})
export class TdmtableComponent implements OnInit {

  @Input()
  playerId: string;

  tdmPlayer: TDMPlayerDetail
  player: Player
  names : string[]
  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.findTDMPlayer(this.playerId).subscribe(player => {
      this.tdmPlayer = player
      
    })
    this.restService.findPlayer(this.playerId).subscribe(player => {
      this.player = player
      this.names = player.name.slice(-5)
    })
  }
  ngOnChanges(): void {
    this.ngOnInit();
  }
}
