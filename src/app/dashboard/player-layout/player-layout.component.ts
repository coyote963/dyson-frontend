import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataModel } from '../../data';
import { RestService } from '../../rest.service'
import { TimeStamps } from '../../timestamps'
import { Time } from '@angular/common';
import { Player } from '../../player'
import { ActivatedRoute } from '@angular/router'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player-layout',
  templateUrl: './player-layout.component.html',
  styleUrls: ['./player-layout.component.css']
})
export class PlayerLayoutComponent {
  /** Based on the screen size, switch from standard to one column per row */

  activity : Observable<Number[]>
  profile : Observable<Player>
  playerId : string
  constructor( private restService: RestService, private route : ActivatedRoute, private matIconRegistry : MatIconRegistry, private domSanitizer : DomSanitizer) {
    this.playerId = this.route.snapshot.params.playerId
    this.activity = this.restService.playerActivity(this.playerId)
    this.profile = this.restService.findPlayer(this.playerId)
    this.matIconRegistry.addSvgIcon('error',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/error.svg')
    )
  }
}
