import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RestService } from '../../rest.service';
import { Player } from '../../player';

@Component({
  selector: 'app-tdmlayout',
  templateUrl: './tdmlayout.component.html',
  styleUrls: ['./tdmlayout.component.scss']
})
export class TdmlayoutComponent implements OnInit {

  playerId: string;
  player: string;
  constructor(private route : ActivatedRoute, private restService: RestService) { }
  
  initialize(): void {
    this.playerId = this.route.snapshot.params.playerId
    this.restService.findPlayer(this.playerId).subscribe(player => {
      this.player = player.name[0]
    })
  }

  ngOnInit(): void {
    this.initialize()
    this.route.params.subscribe(() => {
      this.initialize()
    })
  }

}
