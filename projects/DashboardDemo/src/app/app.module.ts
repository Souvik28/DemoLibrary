import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDashboardModule } from 'ngx-dashboard';
import { PushComponent} from '../../../../node_modules/push-notification/src/app/push-notification/components/push/push.component';
import { PushNotificationModule } from '../../../../node_modules/push-notification/src/app/push-notification/push-notification.module';
import { UserRegHeaderModule } from '../../../../node_modules/push-notification/src/app/user-reg-header/user-reg-header.module';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDashboardModule,
    UserRegHeaderModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
