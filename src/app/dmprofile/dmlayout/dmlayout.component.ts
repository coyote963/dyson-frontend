import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { Player, Avatar } from 'src/app/player';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-dmlayout',
  templateUrl: './dmlayout.component.html',
  styleUrls: ['./dmlayout.component.scss']
})
export class DmlayoutComponent implements OnInit {
  playerId : string;
  playerProfile : Player;
  avatarUri : string;
  constructor(private route: ActivatedRoute,
    private restService: RestService,
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer : DomSanitizer,
    private router : Router,
    private titleService : Title
  ) {
    this.matIconRegistry.addSvgIcon('steam',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/steam.svg')
    )
   }

  initialize(): void {
    this.playerId = this.route.snapshot.params.playerId;
    this.restService.findPlayer(this.playerId).subscribe(player => {
      this.playerProfile = player
      this.restService.findSteamAvatar(this.playerProfile.profile.profile).subscribe(avatar => {
        this.avatarUri = avatar.avatar
      })
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
