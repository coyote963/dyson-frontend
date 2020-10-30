import { Component } from '@angular/core';
import { environment } from 'src/environments/environment'
import { AuthenticationService } from 'src/app/services/auth.service'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-button',
  template: `
    <button mat-button (click)="handleClick()">
        <mat-icon *ngIf="!(isLoggedIn | async)">login</mat-icon>
        <mat-icon *ngIf="(isLoggedIn | async)" svgIcon="logout"></mat-icon>
    </button>
    <button mat-button (click)="handleProfileClick()" *ngIf="(isLoggedIn | async)">
        <mat-icon>verified_user</mat-icon>
    </button>`
})
export class AuthButtonComponent {
  // Inject the authentication service into your component through the constructor
    isLoggedIn : Observable<boolean>
    constructor(public authenticationService : AuthenticationService, private matIconRegistry: MatIconRegistry, private domSanitizer : DomSanitizer) {
        this.matIconRegistry.addSvgIcon('logout',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/logout.svg')
        )
        this.isLoggedIn = authenticationService.isLoggedIn();
    }
    
    handleClick() {
        if (this.authenticationService.isLoginSubject.value) {
            this.authenticationService.logout()
        } else {
            this.authenticationService.login()
        }
    }
    
    handleProfileClick() {
        this.authenticationService.switchToProfile()
    }
}