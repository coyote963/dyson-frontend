import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import PlayerTableDataSource from './player-table-datasource';
import { RestService } from '../rest.service'
import { Player } from '../player'
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent implements AfterViewInit, OnInit {
  dataSource : PlayerTableDataSource;
  displayedColumns = ['_id', 'name', 'color', 'premium'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private restService : RestService) {}

  ngOnInit() {
    this.dataSource = new PlayerTableDataSource(this.restService);
    this.dataSource.loadPlayers(1);
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadPlayersPage())
      )
      .subscribe();
  }

  loadPlayersPage() {
    this.dataSource.loadPlayers(this.paginator.pageIndex, this.paginator.pageSize);
  }
}
