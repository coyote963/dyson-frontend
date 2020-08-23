import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  /** Based on the screen size, switch from standard to one column per row */
  filenames : string[] = [
    '404.png',
    'unknownpage.png',
    'blue.png'
  ]
  file : String
  constructor() {
    this.file = this.filenames[Math.floor(Math.random() * this.filenames.length)];
  }
}
