import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { WeatherapiService } from 'src/app/_services/weatherapi.service';
@Component({
  selector: 'app-ng-chart',
  templateUrl: './ng-chart.component.html',
  styleUrls: ['./ng-chart.component.scss']
})
export class NgChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  myarry_labels: any = []
  myarry_data: any = []
  dx: any
  data: any

  matLable: string[] = ['DAY 1', 'DAY 2', 'DAY 3', 'DAY 4', 'DAY 5', 'DAY 6', 'DAY 7', 'DAY 8', 'DAY 9', 'DAY 10', 'DAY 11', 'DAY 12', 'DAY 13', 'DAY 14',]
  mt: any[] = []
  constructor(private services: WeatherapiService) { }

  ngOnInit(): void {

    this.hourData()

  }

  hourData(id: number = 0) {
    this.services.getWeather().subscribe(
      (res) => { this.data = res, this.mydata([res], id), this.chartData(), this.matLablex([res]) },
      (err) => { console.log(err) }
    )

  }

  matLablex(res: any) {
    res.forEach((res: any) => {
      res.forecast.forecastday.forEach((res: any) => {
        this.mt.push({ date: res.date, icon: res.day.condition.icon, day: this.getDayOfWeek(res.date) })
      })
    })
  }


  mydata(res: any, id: number) {
    console.log(this.myarry_data);
    console.log("myid " + id)
    res.forEach((element: any) => {
      element.forecast.forecastday[id].hour.forEach((hour: any) => {
        const timeString = hour.time;
        const timeOnly = timeString.split(' ')[1];
        const hourOnly = timeOnly.split(':')[0];
        this.myarry_labels.push(hourOnly)
        this.myarry_data.push(hour.temp_c)
      });
    });
    this.dx = this.myarry_data
    this.chartData()
  }


  onTabChange(event: MatTabChangeEvent) {
    const selectedIndex = event.index;
    this.myarry_data = []
    this.myarry_labels = []
    console.log(selectedIndex)
    this.mydata([this.data], selectedIndex)
  }


  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };

  barChartType: ChartType = 'line';
  barChartData: ChartData<'line'> = {
    labels: this.myarry_labels,
    datasets: [
      { data: this.myarry_data, label: 'Temp', fill: true },
    ]
  };

  chartData() {
    this.barChartData = {
      labels: this.myarry_labels,
      datasets: [
        {
          data: this.myarry_data,
          label: 'Temperature',
          fill: true,
        },
      ]
    };
  }

  getDayOfWeek(dateString: string | number | Date) {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayOfWeek];
  }
}
