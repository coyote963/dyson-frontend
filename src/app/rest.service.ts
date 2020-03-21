import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayerPage,
  DMPlayerPage,
  TDMPlayerPage,
  CTFPlayerPage,
  Player,
  TDMPlayerDetail,
  CTFPlayerDetail,
  DMPlayerDetail,
  ColorInfo,
  Avatar
} from './player';
import { TimeStamps} from './timestamps';
import { map, tap } from 'rxjs/operators'
import { environment } from './../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }

  getPlayers(page = 0, size = 10): Observable<PlayerPage> {
    return this.http.get<PlayerPage>(environment.apiUrl + "players", {
      params: new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
    })
  }

  getDMPlayers(page = 0, size = 10): Observable<DMPlayerPage> {
    return this.http.get<DMPlayerPage>(environment.apiUrl + "dmprofiles", {
      params: new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
    }).pipe(
      map(
        x => {
          x.docs.forEach(x => x.rating = x.mu - 3 * x.sigma)
          return x
        }
      )
    )
  }

  searchDMPlayers(page = 0, size = 10, keyword = "", sort = "", direction = "", active = true): Observable<DMPlayerPage> {
    return this.http.get<DMPlayerPage>(environment.apiUrl + "dmprofiles/search", {
      params: new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('keyword', keyword)
      .set('sort', sort)
      .set('order', direction.toString())
      .set('active', active.toString())
    }).pipe(
      map(
        x => {
          x.docs.forEach(x => {
            x.rating = x.mu - 3 * x.sigma
            x.player = x.player[0]
          })
          
          return x
        }
      )
    )
  }

  searchTDMPlayers(page = 0, size = 10, keyword = "", sort = "", direction = "", active = true): Observable<TDMPlayerPage> {
    return this.http.get<TDMPlayerPage>(environment.apiUrl + "tdmprofiles/search", {
      params: new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('keyword', keyword)
      .set('sort', sort)
      .set('order', direction.toString())
      .set('active', active.toString())
    }).pipe(
      map(
        x => {
          x.docs.forEach(x => {
            x.rating = x.mu - 3 * x.sigma
            x.player = x.player[0]
          })
          return x
        }
      )
    )
  }

  searchCTFPlayers(page = 0, size = 10, keyword = "", sort = "", direction = "", active = true): Observable<CTFPlayerPage> {
    return this.http.get<CTFPlayerPage>(environment.apiUrl + "ctfprofiles/search", {
      params: new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('keyword', keyword)
      .set('sort', sort)
      .set('order', direction.toString())
      .set('active', active.toString())
    }).pipe(
      map(
        x => {
          x.docs.forEach(x => {
            x.rating = x.mu - 3 * x.sigma
            x.player = x.player[0]
          })
          return x;
        }
      )
    )
  }

  playerActivity(id : string): Observable<Number[]> {
    return this.http.get<TimeStamps[]>(environment.apiUrl + "players/activity/" + id)
    .pipe(
      map(
        x => {
          return x.map(i => new Date(i.date_created).getTime())
        }
      )
    )
  }

  findPlayer(id : string): Observable<Player> {
    return this.http.get<Player>(environment.apiUrl + "players/id/" + id)
  }

  findTDMPlayer(id : string): Observable<TDMPlayerDetail> {
    return this.http.get<TDMPlayerDetail>(environment.apiUrl + "tdmprofiles/id/" + id)
  }

  findCTFPlayer(id : string): Observable<CTFPlayerDetail> {
    return this.http.get<CTFPlayerDetail>(environment.apiUrl + "ctfprofiles/id/" + id)
  }
  findDMPlayer(id : string): Observable<DMPlayerDetail> {
    return this.http.get<DMPlayerDetail>(environment.apiUrl + "dmprofiles/id/" + id)
  }

  findColorName(r : number, g : number, b : number): Observable<string> {
    return this.http.get<ColorInfo>("https://www.thecolorapi.com/id?rgb=rgb(" + r + "," + g + "," + b + ")").pipe(
      map(
        res => res.name.value
      )
    )
  }

  findSteamAvatar(steamid: string): Observable<Avatar> {
    return this.http.get<Avatar>(environment.apiUrl + "players/avatar/" + steamid)
  }
}
