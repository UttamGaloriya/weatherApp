import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Chart } from 'chart.js/auto';
import { WeatherapiService } from 'src/app/_services/weatherapi.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {





  data: any
  arr = [];
  day_id: number = 0;
  constructor(private services: WeatherapiService) { }
  myarry_labels: any = []
  myarry_data: any = []

  ngOnInit(): void {

    this.services.getWeather().subscribe(
      (res) => { this.data = res, this.mydata([res], 0), this.mychart() },
      (err) => { console.log(err) }
    )
  }


  mydata(res: any, id: number) {
    res.forEach((element: any) => {
      element.forecast.forecastday[id].hour.forEach((hour: any) => {
        const timeString = hour.time;
        const timeOnly = timeString.split(' ')[1];
        const hourOnly = timeOnly.split(':')[0];
        // console.log(hourOnly)
        if (this.cureentTime() <= hourOnly) {
          this.myarry_labels.push(hourOnly)
          this.myarry_data.push(hour.temp_c)
          this.cureentTime()
        }

      });
    });
  }

  mychart() {
    new Chart('myChart', {
      type: 'line',
      data: {
        labels: this.myarry_labels,
        datasets: [{
          label: 'Temp',
          data: this.myarry_data,
          // Color: '#000',
          borderColor: '#000',
          borderWidth: 1,
          backgroundColor: '#e8c32e',
          // backgroundColor: '#7eaffc',
          fill: true
        },
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  onTabChange(event: MatTabChangeEvent) {
    const selectedIndex = event.index;
    console.log(selectedIndex)
    // this.mydata(this.data, selectedIndex)
    // this.mychart()
  }
  cureentTime() {
    let today = new Date();
    var curentHour = today.getHours()
    return curentHour

  }



}
