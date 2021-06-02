import { Component, OnInit } from '@angular/core';
import { PoLineChartSeries, PoChartType, PoPieChartSeries, PoDonutChartSeries, PoBarChartSeries, PoColumnChartSeries } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // TYPES
  lineType: PoChartType = PoChartType.Line;
  columnType: PoChartType = PoChartType.Column;
  barType: PoChartType = PoChartType.Bar;
  donutType: PoChartType = PoChartType.Donut;
  pieType: PoChartType = PoChartType.Pie;

  lineSeries: Array<PoLineChartSeries> = [
    { label: 'JOE', data: [123, 50] }
  ];

  columnSeries: Array<PoColumnChartSeries> = [
    { label: 'JOE', data: [123, 50] }
  ];

  barSeries: Array<PoBarChartSeries> = [
    { label: 'JOE', data: [123, 50] }
  ];

  donutSeries: Array<PoDonutChartSeries> = [
    { label: 'JOE', data: 50 },
    { label: 'JANE', data: 20 }
  ];

  pieSeries: Array<PoPieChartSeries> = [
    { label: 'JOE', data: 123 },
    { label: 'JANE', data: 10 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
