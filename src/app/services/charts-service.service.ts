import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  putChart(chart: Options): Observable<Options> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Options>(baseURL + 'chartsData/', chart, httpOptions);
  }
}
