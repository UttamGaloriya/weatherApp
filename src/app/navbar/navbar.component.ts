import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../_services/weatherapi.service';
import { ReloadService } from '../_services/reload.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { country } from '../coutry';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  errorMessage?: string;
  loading: boolean = true
  country: any = country
  ifCity: Boolean = false

  options: string[] = []
  options1: any = country

  filteredOptions: Observable<string[]> | undefined;
  myControl!: FormControl
  selected!: FormControl

  mysearchList: boolean = false
  search = ''
  city: string[] = ['rajkot', 'jamngar', 'surat']
  constructor(private userServices: WeatherapiService, private active: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.myControl = new FormControl('');
    this.selected = new FormControl('');

    this.userServices.getWeather().subscribe(
      ((res: any) => { this.city = res.location.name, this.loading = true }),
      ((error: any) => { this.errorMessage = 'API request failed. Please try again later.', console.log(error), this.loading = true }),
      () => { this.loading = true }
    )

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value))
    );
    this.getCountry(country)

  }

  getCountry(res: any) {
    const data = Object.keys(res)
    console.log(data)
    this.options = data
  }

  myLocation() {

    this.loading = false
    const data = this.selected.value
    this.userServices.updateCity(data)
    if (this.search.length > 2) { this.userServices.updateCity(data) }
  }

  mySearchList() {
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  mycity() {
    return this.options1[this.myControl.value]
  }
}
