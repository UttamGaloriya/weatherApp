import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from 'src/app/_services/weatherapi.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data: any
  item: any
  temp_id: number = -1;
  constructor(private services: WeatherapiService) { }

  ngOnInit(): void {
    this.services.getWeather().subscribe(
      (res) => { console.log(res), this.data = res, this.item = res.forecast.forecastday, console.log(this.item) },
      (err) => { console.log(err) }
    )
  }
  listDetails(id: number) {
    if (this.temp_id == id) {
      this.temp_id = -1
    } else {
      this.temp_id = id
    }
  }
}

