
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Matchup } from 'src/models/Matchup';
import { RouterLink } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-mostplayed',
  templateUrl: './mostplayed.component.html',
  styleUrls: ['./mostplayed.component.scss']
})
export class MostplayedComponent implements OnInit, OnChanges {

  @Input() playerId: string
  matchups : Matchup[]
  configs :  any[] = []
  
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  onSelect(event) {
    var clickedMu = this.matchups[0];
    this.matchups.forEach(mu => {
      if (mu.winrate * 100 === event.value) {
        clickedMu = mu
      }
    })
    this.router.navigate([`/dm/${clickedMu._id}`])
  }

  formatMiddle(myNumber) {
    return myNumber.toString() + '%';
  }

  constructor(private restService: RestService, private router: Router) { }

  ngOnInit(): void {
    this.restService.findDMMatchups(this.playerId).subscribe(matchups => {
      this.configs = []
      this.matchups = matchups
      matchups.forEach((matchup, index) => {
        this.configs.push({
          color : this.colorScheme.domain[index],
          value: matchup.winrate * 100,
          previousValue: 50,
          units: `Winrate ${matchup.name} (${matchup.total})`
        })
      })
    })
  }



  ngOnChanges(): void { 
    this.ngOnInit();
  }
  
}
