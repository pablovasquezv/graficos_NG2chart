import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }
  graficos() {
    // Token: NbBWToODFl
    const urlAPI ="https://samples.openweathermap.org/data/2.5/forecast/hourly?q=London,us&mode=xml&appid=439d4b804bc8187953eb36d2a8c26a02"
   // "http://localhost:8000";

    return this._http.get(urlAPI).pipe(map(res => res));
  }
}
