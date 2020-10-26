import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {CtfTableDataSource} from './ctf-table-datasource';
import { RestService } from '../../services/rest.service'
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { MatCheckbox } from '@angular/material/checkbox';
@Component({
  selector: 'ctf-player-table',
  templateUrl: './ctf-table.component.html',
  styleUrls: ['./ctf-table.component.sass']
})
export class CtfTableComponent implements AfterViewInit, OnInit {
  dataSource : CtfTableDataSource;
  displayedColumns = ['position', 'name', 'rating', 'mu', 'sigma', 'captures', 'wins', 'losses', 'kills', 'deaths', 'last_updated'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input;
  @ViewChild(MatCheckbox) checkbox: MatCheckbox;
  constructor(private restService : RestService) {}

  ngOnInit() {
    this.dataSource = new CtfTableDataSource(this.restService);
    this.dataSource.loadPlayers(0);
  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);


    this.checkbox.change
      .pipe(
       
        tap(() => {
          this.loadPlayersPage()
          this.paginator.pageIndex = 0;
        })
      )
      .subscribe();


    this.sort.sortChange
      .pipe(
        tap(() => this.loadPlayersPage())
      )
      .subscribe();
      
    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
          debounceTime(150),
          distinctUntilChanged(),
          tap(() => {
            this.paginator.pageIndex = 0;
            this.loadPlayersPage();
          })
      )
      .subscribe();


    this.paginator.page
      .pipe(
        tap(() => this.loadPlayersPage())
      )
      .subscribe();
  }

  loadPlayersPage() {
    this.dataSource.loadPlayers(this.paginator.pageIndex,
      this.paginator.pageSize,
      this.input.nativeElement.value,
      this.sort.active,
      this.sort.direction,
      this.checkbox.checked);
  }
}
