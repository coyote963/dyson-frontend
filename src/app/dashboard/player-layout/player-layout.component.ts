import { Component } from '@angular/core';
import { Observable} from 'rxjs';
import { RestService } from '../../services/rest.service'
import { Player } from '../../player'
import { ActivatedRoute, Router } from '@angular/router'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player-layout',
  templateUrl: './player-layout.component.html',
  styleUrls: ['./player-layout.component.css']
})
export class PlayerLayoutComponent {

  activity : Observable<Number[]>
  profile : Observable<Player>
  playerId : string
  constructor(private restService: RestService,
    private route : ActivatedRoute,
    private matIconRegistry : MatIconRegistry,
    private domSanitizer : DomSanitizer,
    private router: Router
    ) {
    this.playerId = this.route.snapshot.params.playerId
    this.activity = this.restService.playerActivity(this.playerId)
    this.profile = this.restService.findPlayer(this.playerId)
    this.matIconRegistry.addSvgIcon('error',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/error.svg')
    )
  }

  navigateTdm() {
    this.router.navigate([`/tdm/${this.playerId}`])
  }
}
