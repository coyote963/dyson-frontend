import { Component, ElementRef, ViewChild, OnChanges, ViewEncapsulation, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-week-chart',
  templateUrl: './week-chart.component.html',
  styleUrls: ['./week-chart.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class WeekChartComponent implements OnChanges {
  @ViewChild('weekchart')
  private chartContainer: ElementRef;
  
  constructor() { }


  
  @Input()
  data: number[];

  margin = {top: 10, right: 0, bottom: 25, left: 30};


  ngOnChanges(): void {
    if (!this.data) { return; }
    this.createChart()
  }

  onResize() {
    this.createChart();
  }

  private createObjects(data: number[]) {
    
    var hours = new Array(168).fill(0)
    data.forEach(timestamp => {
      var date = new Date(timestamp)
      const day = date.getDay();
      const hour = date.getHours();
      const x = 24 * day + hour
      hours[x] = hours[x] + 1
    })
    return hours.map((element, index) => {
      return {
        frequency : element,
        day : Math.floor(index / 24),
        hour : index % 24
      }
    })
  }
  private createChart(): void {
    d3.select('svg#weekchart').remove();
    const element = this.chartContainer.nativeElement;
    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight)
      .attr('id', 'weekchart')
    var frequencies = this.createObjects(this.data);
    const max = frequencies.reduce(function(prev, current) {
      return (prev.frequency > current.frequency) ? prev : current
    })
    var color = d3.scalePow<string>()
      .domain([0, Math.log2(max.frequency)])
      .range(["#007AFF", '#FFF500'])
      .interpolate(d3.interpolateHcl);
    
    
    
    
    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;
    const x = d3
      .scaleLinear()
      .domain([0, 23])
      .range([0, contentWidth])

    const y = d3.scaleLinear()
      .domain([0, 7])
      .range([0, contentHeight])

    const width = contentWidth / 7
    const height = contentHeight /23
    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    
    const days = [ "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x))
    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(6).tickFormat(d => days[d.valueOf()]))
      .append('text')
        .attr('transform', 'rotate(180)')
        .attr('y', 6)
        .attr('dy', '3em')
        .attr('text-anchor', 'end')

    g.selectAll('.box')
      .data(frequencies)
      .enter().append('rect')
      .attr('class', 'box')
      .attr('x', d => x(d.hour))
      .attr('y', d => y(d.day))
      .attr('width', width)
      .attr('height', height)
      .attr('fill', d => {
        if (d.frequency > 2) {
          return color(Math.log2(d.frequency))
        }
        return color(0)
      })
  }
}