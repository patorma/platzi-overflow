import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule}from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import {MatCardModule} from '@angular/material/card';
import { MomentModule } from 'ngx-moment';
// import 'moment/locale/es';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MomentModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
