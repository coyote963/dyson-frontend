import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { RatingNode } from 'src/models/RatingNode';
import * as shape from 'd3-shape';
@Component({
  selector: 'app-ratingchart',
  templateUrl: './ratingchart.component.html',
  styleUrls: ['./ratingchart.component.sass']
})
export class RatingchartComponent implements OnInit, OnChanges{
  single: any[];
  public view: any[] = [900, 300];
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
  public curve : any = shape.curveStep
  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  @Input() playerId: string

  ratingNodes : RatingNode[]
  constructor(private restService : RestService) { 
  }

  ngOnInit(): void {
    this.restService.findTDMHistory(this.playerId).subscribe(single =>
      {
       Object.assign(this, { single })
      }
    )
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }

}
