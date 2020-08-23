import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { RestService } from 'src/app/rest.service';
import { Climb } from 'src/models/Climb';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router'
@Component({
  selector: 'app-climblist',
  templateUrl: './climblist.component.html',
  styleUrls: ['./climblist.component.css']
})
export class ClimblistComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  climbs : Observable<Climb[]> 

  constructor(private breakpointObserver: BreakpointObserver, private restService: RestService) {}

  ngOnInit(): void {
    this.climbs = this.restService.findClimbs()
  }
}
