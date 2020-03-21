import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {TdmTableDataSource} from './tdm-table-datasource';
import { RestService } from '../../rest.service'
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { MatCheckbox } from '@angular/material/checkbox';
@Component({
  selector: 'tdm-player-table',
  templateUrl: './tdm-table.component.html',
  styleUrls: ['./tdm-table.component.sass']
})
export class TdmTableComponent implements AfterViewInit, OnInit {
  dataSource : TdmTableDataSource;
  displayedColumns = ['position', 'name', 'rating', 'mu', 'sigma', 'kills', 'deaths', 'last_updated', 'wins', 'losses'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input;
  @ViewChild(MatCheckbox) checkbox: MatCheckbox;
  constructor(private restService : RestService) {}

  ngOnInit() {
    this.dataSource = new TdmTableDataSource(this.restService);
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
