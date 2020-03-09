import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Observable, of as observableOf, merge, BehaviorSubject, of } from 'rxjs';
import { Player, PlayerPage } from '../player';
import { RestService } from '../rest.service';
import { catchError, finalize, tap } from 'rxjs/operators';

/**
 * Data source for the PlayerTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export default class PlayerTableDataSource extends DataSource<Player> {
  private playersSubject = new BehaviorSubject<Player[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  private numEntriesSubject = new BehaviorSubject<number>(0);
  public numEntries$ = this.numEntriesSubject.asObservable();
  constructor(private restService : RestService ) { super() }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(collectionViewer : CollectionViewer): Observable<Player[]> {
    return this.playersSubject.asObservable();
 
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
    this.playersSubject.complete();
    this.loadingSubject.complete();
    this.numEntriesSubject.complete();
  }

  loadPlayers(page = 1, size = 10) {
    this.loadingSubject.next(true);
    this.restService.getPlayers(page, size)
    .pipe(
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(playerPage => {
      this.playersSubject.next(playerPage.docs)
      this.numEntriesSubject.next(playerPage.totalDocs)
    })
  }
}
