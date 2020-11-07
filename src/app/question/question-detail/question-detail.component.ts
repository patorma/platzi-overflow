import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: Question = new Question(
    'Estas es una nueva pregunta sobre Android',
    'Miren, tengo una duda con una aplicación que estoy escribiendo para Android ...',
    new Date(),
    'devicon-android-plain'
  );

  constructor() { }

  ngOnInit(): void {
  }

}
