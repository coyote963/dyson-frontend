import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Winrate } from 'src/app/winrate';

@Component({
  selector: 'app-winrates',
  templateUrl: './winrates.component.html',
  styleUrls: ['./winrates.component.scss']
})
export class WinratesComponent implements OnInit {

  @Input()
  playerId: string

  winrates : Winrate[]
  constructor(private restService: RestService) { }

  ngOnInit(): void {
    console.log("hello")
    this.restService.findTDMWinrates(this.playerId).subscribe(rates => {
      this.winrates = rates.sort((a, b) => { return b.games - a.games})
      console.log(rates)
    })
  }
  ngOnChanges(): void {
    this.ngOnInit();
  }

}
