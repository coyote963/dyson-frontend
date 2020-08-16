import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { DMPlayerDetail } from '../../player'
@Component({
  selector: 'app-dmpreview',
  templateUrl: './dmpreview.component.html',
  styleUrls: ['./dmpreview.component.scss']
})
export class DmpreviewComponent implements OnInit {

  constructor(private restService: RestService) { }
  playerDetail : DMPlayerDetail
  colorScheme = {
    domain: ['orange']
  };
  single : any[]
  legend : false
  view = []
  units = "percentile"
  @Input()
  playerId: string;
  error : Error
  getPlayerDetail(): void {
    this.restService.findDMPlayer(this.playerId).subscribe((detail : DMPlayerDetail) => {
      this.playerDetail = detail
      this.single = [{
        name : "player",
        value : this.playerDetail.percentile
      }]
      this.onResizeDMChart()
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
  
  onResizeDMChart(): void {
    var height = document.getElementById('guage-chart-parent-dm').offsetHeight / 1.3
    var width = document.getElementById('guage-chart-parent-dm').offsetWidth / 1.3
    this.view = [width, height]
  }
}
