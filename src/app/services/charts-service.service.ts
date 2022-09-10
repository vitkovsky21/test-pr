import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Options } from 'highcharts';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ChartsServiceService {

  constructor(private http: HttpClient) {}

  getCharts(): Observable<Options[]> {
    return this.http.get<Options[]>(baseURL + 'chartsData');
  }

  putChart(chart: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<any>(baseURL + 'chartsData/' + '0', chart, httpOptions);
  }
}
