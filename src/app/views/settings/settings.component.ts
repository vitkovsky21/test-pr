import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Chart } from 'angular-highcharts';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ChartsServiceService } from 'src/app/services/charts-service.service';

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

  constructor(private chartsService: ChartsServiceService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.chartsService.getCharts()
      .subscribe(chartsData => this.charts = chartsData)


    setTimeout(() => {
      
      console.log(JSON.stringify(this.charts[0]))
      
      console.log(this.charts[0].charts.length)
      for (let i = 0; i <= this.charts[0].charts.length - 1; i++) {
        this.testCharts = new Chart(this.charts[0].charts[i])
        this.unsortedArray.push(this.testCharts)

        this.chartsArray = this.unsortedArray.sort(function(a,b){
          return <any>new Date(b.options.date) - <any>new Date(a.options.date);
        });
      }
    }, 1000)
  }

  openModalWindow() {
    this.dialogRef.open(ModalComponent)
  }

}
