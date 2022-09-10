import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Chart } from 'angular-highcharts';
import { AddDataComponent } from 'src/app/components/add-data/add-data.component';
import { ChangeDataComponent } from 'src/app/components/change-data/change-data.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ChartsServiceService } from 'src/app/services/charts-service.service';
import { HandleActions } from 'src/app/state/handler.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  charts = new Array;
  chartsArray = new Array;
  unsortedArray = new Array;
  testCharts = new Chart();

  // @ViewChild() private rangeInput: MatDateRangeInput<Date>;

  constructor(private store$: Store, 
              private chartsService: ChartsServiceService, 
              private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.chartsService.getCharts()
      .subscribe(chartsData => this.charts = chartsData)

    setTimeout(() => {      
      for (let i = 0; i <= this.charts[0].charts.length - 1; i++) {
        this.testCharts = new Chart(this.charts[0].charts[i])
        this.unsortedArray.push(this.testCharts)

        this.chartsArray = this.unsortedArray.sort(function(a,b){
          return <any>new Date(a.options.date) - <any>new Date(b.options.date);
        });
      }
    }, 1000)
  }

  openModalWindow() {
    this.dialogRef.open(ModalComponent)
  }

  openModalDataWindow(i: number) {
    let index = i.toString()
    this.store$.dispatch(HandleActions.sendData({data: index}))

    this.dialogRef.open(AddDataComponent)
  }

  openChangeDataWindow(j: number, i: number) {
    let chartIndex = i.toString()
    this.store$.dispatch(HandleActions.sendData({data: chartIndex}))

    let dataIndex = j.toString()
    this.store$.dispatch(HandleActions.changeData({changeData: dataIndex}))

    this.dialogRef.open(ChangeDataComponent)
  }

}
