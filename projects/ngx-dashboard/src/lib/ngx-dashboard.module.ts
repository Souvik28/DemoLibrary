import { NgModule } from '@angular/core';
import { NgxDashboardComponent } from './ngx-dashboard.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { SemiCircularProgressbarComponent } from './semi-circular-progressbar/semi-circular-progressbar.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [NgxDashboardComponent, SemiCircularProgressbarComponent, TestComponentComponent, PieChartComponent],
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  exports: [NgxDashboardComponent, SemiCircularProgressbarComponent, PieChartComponent]
})
export class NgxDashboardModule { }
