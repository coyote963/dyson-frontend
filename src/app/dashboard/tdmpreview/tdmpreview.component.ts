import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { TDMPlayerDetail } from '../../player'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tdmpreview',
  templateUrl: './tdmpreview.component.html',
  styleUrls: ['./tdmpreview.component.scss']
})
export class TdmpreviewComponent implements OnInit {

  constructor(private restService: RestService) { }
  playerDetail : TDMPlayerDetail
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
    this.restService.findTDMPlayer(this.playerId).subscribe((detail : TDMPlayerDetail) => {
      this.playerDetail = detail
      this.single = [{
        name : "player",
        value : this.playerDetail.percentile
      }]
      this.onResizeTDMChart()
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
  
  onResizeTDMChart(): void {
    var height = document.getElementById('guage-chart-parent-tdm').offsetHeight / 1.3
    var width = document.getElementById('guage-chart-parent-tdm').offsetWidth / 1.3
    this.view = [width, height]
  }
}
