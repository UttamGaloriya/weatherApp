import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HomeComponent } from '../component/home/home.component';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(private http: HttpClient) { }

  private apiKey = 'aac085654ad642d3b10110625232305';
  private citySubject: BehaviorSubject<string> = new BehaviorSubject<string>('Ahmedabad');

  updateCity(city: string): void {
    this.citySubject.next(city);
  }

  getWeather(): Observable<any> {
    return this.citySubject.pipe(
      switchMap((city: string) => {
        const url = `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=14&key=${this.apiKey}`;
        return this.http.get(url);
      })
    );
  }

}

