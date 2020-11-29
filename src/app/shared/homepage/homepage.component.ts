import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import * as d3 from 'd3'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements AfterViewInit {
  // @ViewChild('chart')
  // private chartContainer: ElementRef;
  
  
  constructor() { }
  
  isShowHideFlag = "over"

  ngAfterViewInit(): void {
    //this.createChart()
  }

  // private createChart(): void {
    
  //   const element = this.chartContainer.nativeElement;
  //   const svg = d3.select(element).append('svg')
  //       .attr('width', element.offsetWidth)
  //       .attr('height', element.offsetHeight)
  //       .attr('id', "players")
  //   var circle = svg.append("circle")
  //     .attr("cx", 30)
  //     .attr("cy", 30)
  //     .attr("r", 20);
  // }
  
}
