import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmrankings',
  templateUrl: './dmrankings.component.html',
  styleUrls: ['./dmrankings.component.sass']
})
export class DmrankingsComponent implements OnInit {

  gamemode = 'Deathmatch';
  
  constructor() { }

  ngOnInit(): void {
  }

}
