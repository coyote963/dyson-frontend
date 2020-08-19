import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { CTFPlayerDetail } from '../../player'
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'app-ctfpreview',
  templateUrl: './ctfpreview.component.html',
  styleUrls: ['./ctfpreview.component.scss']
})
export class CtfpreviewComponent implements OnInit {

  constructor(private restService: RestService) { }
  playerDetail : CTFPlayerDetail
  colorScheme = {
    domain: ['#2AA198']
  };
  single : any[]
  legend : false
  view = []
  units = "percentile"
  @Input()
  playerId: string;
  error : Error
  getPlayerDetail(): void {
    this.restService.findCTFPlayer(this.playerId).subscribe((detail : CTFPlayerDetail) => {
      this.playerDetail = detail
      this.single = [{
        name : "player",
        value : this.playerDetail.percentile
      }]
      this.onResizeCTFChart()
    },
    error => {
      this.error = error
    })
  }

  ngOnInit(): void {
    if (this.playerId){
      this.getPlayerDetail()
      
    }
  }
  
  onResizeCTFChart(): void {
    var height = document.getElementById('guage-chart-parent-ctf').offsetHeight / 1.3
    var width = document.getElementById('guage-chart-parent-ctf').offsetWidth / 1.3
    this.view = [width, height]
  }
}
