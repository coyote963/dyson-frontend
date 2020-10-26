import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { RatingNodeHistory } from 'src/models/RatingNode';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-ratinggraph',
  templateUrl: './ratinggraph.component.html',
  styleUrls: ['./ratinggraph.component.sass']
})
export class RatinggraphComponent implements OnInit, OnChanges {


  single: any[];
  public view: any[] = [700, 300];
  public showXAxis = false;
  public showYAxis = true;
  public gradient = true;
  public showLegend = false;
  public showXAxisLabel = true;
  public autoScale = true;
  public timeline = true;
  public xAxisLabel: "History";
  public showYAxisLabel = true;
  public yAxisLabel: "Rating";
  public graphDataChart: any[];
  public curve : any = shape.curveBasis
  public colorScheme = {
    domain: [ '#C7B42C', '#AAAAAA']
  };

  @Input() playerId : string
  constructor(private restService : RestService) { }

  ngOnInit(): void {
    this.restService.findDMHistory(this.playerId).subscribe(timedata =>
      {
        var single : any = timedata
        single[0].series.forEach((node, index) => node.name = index)
        console.log(single)
        Object.assign(this, { single })
    })
  }
  ngOnChanges(): void {
    this.ngOnInit()
  }
}
