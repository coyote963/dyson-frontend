import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { ClanDescription } from 'src/models/ClanDescription';

@Component({
  selector: 'app-clan-detail',
  templateUrl: './clan-detail.component.html',
  styleUrls: ['./clan-detail.component.scss']
})
export class ClanDetailComponent implements OnInit {


  clanId : string

  clanDescription : ClanDescription

  constructor(private restService : RestService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.clanId = this.route.snapshot.params.clanId
    this.restService.findClan(this.clanId).subscribe(description => {
      this.clanDescription = description
    })
  }

}
