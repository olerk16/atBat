import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

interface Player {
  name: string;
  average: number;
}

@Component({
  selector: 'app-player-chart',
  template: '<svg></svg>',
})
export class PlayerChartComponent implements OnInit {
  @Input() data: Player[] = [];

  ngOnInit() {
    const svg = d3.select('svg').attr('width', 600).attr('height', 400);
    svg
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', (_: unknown, i: number) => i * 40)
      .attr('y', (d: Player) => 400 - d.average * 100)
      .attr('width', 30)
      .attr('height', (d: Player) => d.average * 100)
      .attr('fill', 'steelblue');
  }
}
