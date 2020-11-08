import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {

  public respuesta = {
    description: ''
  } 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
      console.log(form.value.description)
  }
}
