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
  // @Input()
  search = ''
  city: any = ''
  constructor(private userServices: WeatherapiService, private active: ActivatedRoute) {
    this.active.queryParams.subscribe((res) => {
      console.log(res['q'])
      this.city = res['q'];

    });
  }

  ngOnInit(): void {
  }


  myLocation() {
    if (this.search.length > 2) { this.userServices.getMylocation(this.search) }
  }

}
