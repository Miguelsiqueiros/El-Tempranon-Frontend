import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreatePTOComponent } from './components/CreatePTO/CreatePTO.component';
import { RegisterComponent } from './components/register/register.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';

// Angular material modules
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule, MatSidenavModule} from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { LoginProfileComponent } from './components/login-profile/login-profile.component';
import { Profile } from 'selenium-webdriver/firefox';

@NgModule({
  declarations: [
    AppComponent,
    CreatePTOComponent,
    NavbarComponent,
    RegisterComponent,
    RankingComponent,
    FooterComponent,
    CheckInComponent,
    LoginProfileComponent,
    DashboardComponent,
    CardComponent
    ],
  imports: [
    MatDialogModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule,
    MatStepperModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatListModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    RankingComponent,
    CheckInComponent,
    LoginProfileComponent
  ],
  bootstrap: [AppComponent],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
