import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestService } from 'src/app/services/rest.service';
import { Clan } from 'src/models/Clan'
@Component({
  selector: 'app-clan-index',
  templateUrl: './clan-index.component.html',
  styleUrls: ['./clan-index.component.css']
})
export class ClanIndexComponent implements OnInit {
  clans : Observable<Clan[]>

  constructor(private restService: RestService, private titleService: Title) { }

  ngOnInit(): void {
    this.clans = this.restService.findAllClans()
    this.titleService.setTitle("Dyson City Clans")
  }
}
