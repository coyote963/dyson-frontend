import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { WeaponUsage } from 'src/app/player';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-favoriteweapons',
  templateUrl: './favoriteweapons.component.html',
  styleUrls: ['./favoriteweapons.component.scss']
})
export class FavoriteweaponsComponent implements OnInit {

  @Input()
  playerId: string

  topWeapons: WeaponUsage[];

  constructor(private restService: RestService, private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.restService.findFavoriteWeapons(this.playerId).subscribe(weapons => {
      this.topWeapons = weapons.slice(0, 10);
    },
    err => {
      console.log(err)
    })
  }
  ngOnChanges(): void {
    this.ngOnInit();
  }
}
