import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Observable, of as observableOf, merge, BehaviorSubject, of } from 'rxjs';
import { CTFPlayer } from '../../player';
import { RestService } from '../../rest.service';
import { finalize } from 'rxjs/operators';


/**
 * Data source for the DmTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CtfTableDataSource extends DataSource<CTFPlayer> {
  private playersSubject = new BehaviorSubject<CTFPlayer[]>([]);
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
  connect(collectionViewer : CollectionViewer): Observable<CTFPlayer[]> {
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

  loadPlayers(page = 0, size = 10, keyword = "", sort = "", direction = "asc", active = false) {
    this.loadingSubject.next(true);
    this.restService.searchCTFPlayers(page, size, keyword, sort, direction, active)
    .pipe(
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(playerPage => {
      this.playersSubject.next(playerPage.docs)
      this.numEntriesSubject.next(playerPage.totalDocs)
    })
    
  }
}
