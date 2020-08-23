import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RestService } from '../../rest.service';
import { Player } from '../../player';
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer, Title } from "@angular/platform-browser";
import { DOCUMENT } from '@angular/common'
@Component({
  selector: 'app-tdmlayout',
  templateUrl: './tdmlayout.component.html',
  styleUrls: ['./tdmlayout.component.scss']
})
export class TdmlayoutComponent implements OnInit {

  playerId: string;
  playerProfile : Player

  constructor(private route : ActivatedRoute, 
    private restService: RestService, 
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer : DomSanitizer,
    private router : Router,
    private title : Title
  ) {
    this.matIconRegistry.addSvgIcon('steam',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/steam.svg')
    )
  }
  
  initialize(): void {
    this.playerId = this.route.snapshot.params.playerId
    this.restService.findPlayer(this.playerId).subscribe(player => {
      this.playerProfile = player
      this.title.setTitle(`Dyson City ${player.name[0]} Team Deathmatch`)
    })
  }

  ngOnInit(): void {
    this.initialize()
    this.route.params.subscribe(() => {
      this.initialize()
    })
  }

  onClickHome(): void {
    this.router.navigate(['player/', this.playerId])
  }

}
