import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Player
} from 'src/app/player';
import {
  RestService
} from 'src/app/rest.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  @Input()
  data: Player;

  colorName: string
  colorHex: string
  imgUrl: string

  constructor(private restService: RestService, private titleService : Title) {}

  rgbToHex(rgb): string {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  fullColorHex(r, g, b): string {
    var red = this.rgbToHex(r);
    var green = this.rgbToHex(g);
    var blue = this.rgbToHex(b);
    return red + green + blue;
  };

  setColorName(gmlColor: string): void {
    var colorvalue = parseInt(gmlColor)
    var b = Math.trunc(colorvalue / (256 ** 2))
    var remainder = Math.trunc(colorvalue % (256 ** 2))
    var g = Math.trunc(remainder / 256)
    var r = Math.trunc(remainder % 256)
    this.restService.findColorName(r, g, b).subscribe(name => {
      this.colorHex = "#" + this.fullColorHex(r,g,b)
      this.colorName = name
    })
  }

  setAvatar(steamid: string): void {
    this.restService.findSteamAvatar(steamid).subscribe(avatarResp => {
      this.imgUrl = avatarResp.avatar
    })
  }
  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.data) {
      this.setColorName(this.data.color)
      if (this.data.profile.platform == "0") {
        this.setAvatar(this.data.profile.profile)
      }
      this.titleService.setTitle(`Dyson City: ${this.data.name[0]}`)
    }
  }
}
