import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChartsServiceService } from 'src/app/services/charts-service.service';
import { ChartTemp } from 'src/app/shared/data/ChartData';
import { DataSelectors } from 'src/app/state/handler.selector';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit { 

  name!: string;
  data!: any[];
  type!: string;

  addDataForm = new FormGroup({
    name: new FormControl,
    data: new FormControl,
    type: new FormControl
  });

  charts: any;
  data$: Observable<string>
  index!: string;
  chartsData: any;

  constructor(private chartsService: ChartsServiceService, private store$: Store) { 
    this.data$ = this.store$.select(DataSelectors.data)
  }

  ngOnInit(): void {
    this.chartsService.getCharts()
      .subscribe(chartsData => this.charts = chartsData)   
    this.data$.subscribe(index => this.index = index)
    setTimeout(() => {
      console.log(this.index)
      console.log(this.charts[0].charts[parseInt(this.index)].series)
    }, 500)
  }

  onSubmit() {
    console.log("INDEX", this.index)
    console.log(ChartTemp?.charts)

    this.chartsData = ChartTemp?.charts.series;

    this.chartsData.name = this.name;
    this.chartsData.data = this.data;
    this.chartsData.type = this.type;

    this.charts[0].charts[parseInt(this.index)].series.push({...this.chartsData[0]})

    this.chartsService.putChart(this.charts[0])
      .subscribe(charts => {
        this.charts = charts;
      }
    )}
  
}
