import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './component/home/chart/chart.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TableComponent } from './component/home/table/table.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NgChartComponent } from './component/home/ng-chart/ng-chart.component';
import { DAYPipe } from './day.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChartComponent,
    TableComponent,
    NgChartComponent,
    DAYPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    NgChartsModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
