import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType  } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['red', 'gray'];
  public doughnutChartData: MultiDataSet = [
    [350, 450],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
