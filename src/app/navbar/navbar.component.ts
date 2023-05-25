import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../_services/weatherapi.service';
import { ReloadService } from '../_services/reload.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  search = ''
  city: any = ''
  constructor(private userServices: WeatherapiService, private active: ActivatedRoute) {
    this.userServices.getWeather().subscribe(
      ((res: any) => { this.city = res.location.name }),
      ((error: any) => console.log(error)),
      () => console.log('done')

    )
  }

  ngOnInit(): void {
  }


  myLocation() {
    if (this.search.length > 2) { this.userServices.updateCity(this.search) }
  }

  getDayOfWeek(dateString: string | number | Date) {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return daysOfWeek[dayOfWeek];
  }

}
