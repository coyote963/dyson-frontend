import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RestService } from 'src/app/rest.service';
import { TDMKill } from 'src/models/TDMKill';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-killhistory',
  templateUrl: './killhistory.component.html',
  styleUrls: ['./killhistory.component.scss']
})
export class KillhistoryComponent implements OnInit, AfterViewInit{

  @Input()
  playerId: string

  displayedColumns: string[] = ['killer', 'victim', 'date_created'];
  completeData : TDMKill[];
  displayedData : TDMKill[];

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private restService: RestService) { }

  setPage(page : number) {
    this.displayedData = this.completeData.slice(
      10 * page,
      10 * (page + 1)
    )
  }
  ngOnInit(): void {
    this.restService.findTDMKills(this.playerId).subscribe(results => {
      this.completeData = results
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
