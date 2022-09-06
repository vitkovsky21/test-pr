import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCalendarCellCssClasses, MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker';
import { Chart } from 'angular-highcharts';
import { ChartsServiceService } from 'src/app/services/charts-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {


  @ViewChild(MatDateRangeInput) private rangeInput!: MatDateRangeInput<Date>;
  @ViewChild(MatDateRangePicker) private rangePicker!: MatDateRangePicker<Date>;

  charts = new Array;
  
  chartsArray = new Array;
  unsortedArray = new Array;

  form!: FormGroup;
  comparisonStart = new Date();
  comparisonEnd = new Date();
  startAt = new Date();

  testCharts = new Chart();

  constructor(private chartsService: ChartsServiceService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      daterange: new FormGroup({
        start: new FormControl(),
        end: new FormControl(),
      }),
    });

    this.chartsService.getCharts()
      .subscribe(chartsData => this.charts = chartsData)

    setTimeout(() => {
      for (let i = 0; i <= this.charts[0].charts.length - 1; i++) {
        this.testCharts = new Chart(this.charts[0].charts[i])
        this.unsortedArray.push(this.testCharts)

        this.chartsArray = this.unsortedArray.sort(function(a,b){
          return <any>new Date(b.options.date) - <any>new Date(a.options.date);
        });
      }
    }, 1000)

    setTimeout(() => {
      this.comparisonStart = new Date(this.chartsArray[this.chartsArray.length - 1].options.date);
      this.comparisonEnd = new Date(this.chartsArray[0].options.date);
      this.startAt = new Date(this.chartsArray[this.chartsArray.length - 1].options.date);
    }, 1200)
  }

  onSubmit() {
    console.log(this.form.value.daterange.end, "END");
    console.log(this.form.value.daterange.start, "START");
    
    const dates: any[] = [];
    const currentDate = this.form.value.daterange.start;
    currentDate.setDate(currentDate.getDate() + 1);
    
    const endDate = this.form.value.daterange.end;
    endDate.setDate(endDate.getDate() + 1)

    while (currentDate <= this.form.value.daterange.end) {
      dates.push(new Date(currentDate).toISOString().slice(0, -13));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    setTimeout(() => {
      for (let i = 0; i <= this.charts[0].charts.length - 1; i++) {
        this.unsortedArray = [];

        this.testCharts = new Chart(this.charts[0].charts[i])
        this.unsortedArray.push(this.testCharts)

        this.chartsArray = this.unsortedArray.sort(function(a,b){
          return <any>new Date(b.options.date) - <any>new Date(a.options.date);
        });
      }
    }, 1000)
  }

  unavailableDays(calendarDate: Date): boolean {
    return calendarDate > new Date();
  }

  cellClass(date: Date): MatCalendarCellCssClasses {
    return date > new Date() ? 'test-cell-class' : 'test-another-cell-class';
  }

}
