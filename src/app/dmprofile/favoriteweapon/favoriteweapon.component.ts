import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { WeaponUsage } from 'src/app/player';

@Component({
  selector: 'app-favoriteweapon',
  templateUrl: './favoriteweapon.component.html',
  styleUrls: ['./favoriteweapon.component.scss']
})
export class FavoriteweaponComponent implements OnInit, OnChanges {

  weaponUsage : WeaponUsage[]

  @Input() playerId : string;
  constructor(private restService : RestService) { }

  ngOnInit(): void {
    this.restService.findFavoriteWeaponsDM(this.playerId).subscribe(weaponUsage => {
      this.weaponUsage = weaponUsage.slice(0,10);
    })
  }
  ngOnChanges(): void {
    this.ngOnInit()
  }
}
