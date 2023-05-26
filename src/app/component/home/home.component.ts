import { Component, OnInit } from '@angular/core';
import { ReloadService } from 'src/app/_services/reload.service';
import { WeatherapiService } from 'src/app/_services/weatherapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any
  loading: boolean = false
  constructor(private services: WeatherapiService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {

    this.services.getWeather().subscribe(
      (res) => {
        console.log(res), this.data = res,
          this.loading = true
      },
      (err) => { console.log(err), this.loading = true },
      () => { this.loading = true }
    )

  }


}
