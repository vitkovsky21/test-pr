import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  type!: string;
  color!: string;

  data!: string;
  dataChange!: any;
  dataArr: any[] = [];

  seriesObj = {
    name: '',
    type: '',
    data: this.dataArr,
    color: ''
  }

  addDataForm = new FormGroup({
    name: new FormControl,
    data: new FormControl,
    type: new FormControl,
    color: new FormControl
  });

  charts: any;
  data$: Observable<string>
  index!: string;
  chartsData: any;

  constructor(private chartsService: ChartsServiceService, 
              private store$: Store, 
              private dialogRef: MatDialog,
              private router: Router) { 
    this.data$ = this.store$.select(DataSelectors.data)
  }

  ngOnInit(): void {
    this.chartsService.getCharts()
      .subscribe(chartsData => this.charts = chartsData)   
    this.data$.subscribe(index => this.index = index)
  }

  onSubmit() {
    this.chartsData = ChartTemp?.charts.series;

    this.dataChange = this.data.split(', ')
    for (let i = 0; i < this.dataChange.length; i++) {  
      this.dataArr.push(parseInt(this.dataChange[i]))
    }

    this.seriesObj.name = this.name;
    this.seriesObj.data = this.dataArr;
    this.seriesObj.type = this.type;
    this.seriesObj.color = this.color;

    this.chartsData.push(this.seriesObj)

    this.charts[0].charts[parseInt(this.index)].series.push({...this.chartsData[this.chartsData.length - 1]})
    this.chartsService.putChart(this.charts[0])
      .subscribe(charts => {
        this.charts = charts;
      }
    )

    setTimeout(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/settings']);
      }); 
    }, 200)

    
    this.dialogRef.closeAll()
  }  
}
