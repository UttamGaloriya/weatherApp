import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from 'src/app/_services/weatherapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any
  constructor(private services: WeatherapiService) { }

  ngOnInit(): void {
    this.services.getWeather().subscribe(
      (res) => { console.log(res), this.data = res },
      (err) => { console.log(err) }
    )
  }

}
