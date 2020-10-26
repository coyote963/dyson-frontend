import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { DMKill } from 'src/models/DMKill';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';

const perPage = 10;

@Component({
  selector: 'app-killtable',
  templateUrl: './killtable.component.html',
  styleUrls: ['./killtable.component.scss']
})
export class KilltableComponent implements OnInit {

  @Input() playerId : string
  constructor(private restService : RestService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator


  displayedColumns: string[] = ['killer', 'victim', 'date_created'];
  completeData : DMKill[];
  displayedData : DMKill[];


  setPage(page : number) {
    this.displayedData = this.completeData.slice(
      perPage * page,
      perPage * (page + 1)
    )
  }

  ngOnInit(): void {
    this.restService.findDMKills(this.playerId).subscribe(kills => {
      this.completeData = kills;
      this.setPage(0)
    })
  }

  
  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.setPage(this.paginator.pageIndex))
      )
      .subscribe();
    
  }
  ngOnChanges(): void {
    this.ngOnInit();
    this.ngAfterViewInit();
    this.paginator.firstPage();
  }

}
