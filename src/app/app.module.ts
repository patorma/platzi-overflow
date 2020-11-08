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
import { AnswerFormComponent } from './answer/answer-form.component';

import { FormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
// import 'moment/locale/es';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionDetailComponent,
    AnswerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MomentModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
