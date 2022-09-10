import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartsServiceService } from 'src/app/services/charts-service.service';
import { Chart, ChartData } from 'src/app/shared/chart';
import { ChartTemp } from 'src/app/shared/data/ChartData';
import { SettingsComponent } from 'src/app/views/settings/settings.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  chart!: Chart;
  charts!: any;
  chartData!: ChartData;

  dates!: string;
  datesArr: string[] = [];
  datesChange!: string[];
  
  text!: string;
  color!: string;
  type!: string;

  data: any
  
  addChartForm = new FormGroup({
    text: new FormControl,
    dates: new FormControl,
    type: new FormControl
  });

  constructor(private chartsService: ChartsServiceService,
              private router: Router,
              private dialogRef: MatDialog) {}

  ngOnInit(): void {
    this.chartsService.getCharts()
      .subscribe(chartsData => this.charts = chartsData)
  }

  onSubmit() {
    console.log(this.addChartForm)
    console.log(ChartTemp.charts)
 
    this.data = ChartTemp?.charts;

    this.datesChange = this.dates.split(', ');

    for (let i = 0; i < this.datesChange.length; i++) {
      this.datesArr.push(this.datesChange[i])
    }

    this.data.title.text = this.text;
    this.data.chart.type = this.type;
    this.data.xAxis.categories = this.datesArr;

    this.charts[0].charts.push({...this.data})
    this.chartsService.putChart(this.charts[this.charts.length - 1])
      .subscribe(charts => {
       this.charts = charts;
      })  

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/settings']);
    }); 

    this.dialogRef.closeAll()

    }

}
