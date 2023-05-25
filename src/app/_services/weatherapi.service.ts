import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeComponent } from '../component/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  private url_location = "https://api.weatherapi.com/v1/forecast.json?q=Ahmedabad&days=14&key=%20aac085654ad642d3b10110625232305";
  // private url_location = "https://api.weatherapi.com/v1/forecast.json?q=rajkot&days=14&key=%20aac085654ad642d3b10110625232305";

  constructor(private http: HttpClient) { }

  getMylocation(data: string) {
    this.url_location = `https://api.weatherapi.com/v1/forecast.json?q=${data}&days=14&key=%20aac085654ad642d3b10110625232305`;
    this.getWeather()
    console.log(this.url_location)

  }

  getWeather(): Observable<any> {
    return this.http.get(this.url_location);
  }

  // get mydata() { return this.getWeather().subscribe((res) => { return res }) }

}
