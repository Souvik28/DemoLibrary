import { NgModule } from '@angular/core';
import { NgxDashboardComponent } from './ngx-dashboard.component';
import { MatCardModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [NgxDashboardComponent],
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  exports: [NgxDashboardComponent]
})
export class NgxDashboardModule { }
