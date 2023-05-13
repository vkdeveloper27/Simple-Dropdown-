import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SankeyComponent } from './sankey.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PiecharlineComponent } from './piecharline/piecharline.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownMatComponent } from './dropdown-mat/dropdown-mat.component';
import {DropdownEx1Component} from './dropdown-ex1/dropdown-ex1.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [BrowserModule, FormsModule, MatSelectModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SankeyComponent,
    PieChartComponent,
    PiecharlineComponent,
    DropdownComponent,
    DropdownMatComponent,
    DropdownEx1Component
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
