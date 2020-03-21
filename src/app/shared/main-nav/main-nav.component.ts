import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private matIconRegistry: MatIconRegistry, private domSanitizer : DomSanitizer) {
    this.matIconRegistry.addSvgIcon('dm',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/dm.svg')
    )
    this.matIconRegistry.addSvgIcon('players',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/players.svg')
    )
    this.matIconRegistry.addSvgIcon('skull',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/skull.svg')
    )
  }

}
