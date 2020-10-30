import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { AuthUser } from '../player'
import jwtDecode from "jwt-decode";
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<AuthUser>;
    public currentUser: Observable<AuthUser>;
    public isLoginSubject: BehaviorSubject<boolean>

    constructor(private router: Router) {
        this.currentUserSubject = new BehaviorSubject<AuthUser>(null);
        if (localStorage.getItem('jwtToken') !== null) {
            this.currentUserSubject = new BehaviorSubject<AuthUser>(jwtDecode(localStorage.getItem('jwtToken')));
        }
        this.currentUser = this.currentUserSubject.asObservable();
        this.isLoginSubject = new BehaviorSubject<boolean>(this.hasToken())
    }

    isLoggedIn() : Observable<boolean> {
        return this.isLoginSubject.asObservable();
    }

    public get currentUserValue(): AuthUser {
        return this.currentUserSubject.value;
    }

    private hasToken() : boolean {
        return !!localStorage.getItem('jwtToken');
    }

    login() {
        const popupWindow = window.open(
            environment.apiUrl + "auth/steam",
           "_blank",
           "width=800, height=600",
         );
         window.addEventListener("message", event => {
            const { token, ok } = event.data;
            if (ok) {
                localStorage.setItem("jwtToken", token);
                this.currentUserSubject.next(jwtDecode(token))
                this.isLoginSubject.next(true)
             }
            });
        if (window.focus) popupWindow.focus();
    };
    

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.isLoginSubject.next(false)
    }

    switchToProfile() {
        const playerId = this.currentUserSubject.value.user._id
        this.router.navigate(['/player',playerId ])
    }
}