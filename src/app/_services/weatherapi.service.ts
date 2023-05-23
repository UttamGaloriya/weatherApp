import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  // private url_location = "https://api.weatherapi.com/v1/current.json?q=ahmedabad&lang=en&key=%20aac085654ad642d3b10110625232305";
  private url_location = "https://api.weatherapi.com/v1/forecast.json?q=Ahmedabad&days=14&key=%20aac085654ad642d3b10110625232305";
  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get(this.url_location);
  }

}
