import { Type } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { ChartsServiceService } from 'src/app/services/charts-service.service';
import { Chart, ChartData } from 'src/app/shared/chart';
import { ChartTemp } from 'src/app/shared/data/ChartData';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  chart!: Chart;
  charts!: any;

  chartData!: ChartData;
  
  text!: string;

  dates!: string;
  color!: string;
  type!: string;

  data: any
  
  addChartForm = new FormGroup({
    text: new FormControl,
    dates: new FormControl,
    type: new FormControl
  });

  constructor(private chartsService: ChartsServiceService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.chartsService.getCharts()
      .subscribe(chartsData => this.charts = chartsData)
  }

  onSubmit() {
    console.log(this.addChartForm)
    console.log(ChartTemp.charts)

    this.data = ChartTemp?.charts

    this.data.title.text = this.text;
    this.data.chart.type = this.type;

    // this.chartData = this.addChartForm.value;

    console.log("CHARTDATA", this.data)
    // console.log("THISCHARTS", this.charts[0].charts)
    
    this.charts[0].charts.push({...this.data})
    

    // this.chart.charts.push(this.chartData)

    this.chartsService.putChart(this.charts[0])
     .subscribe(charts => {
       this.charts = charts;
     },
    // this.chart.charts.push(this.chartData)

    )}

}
