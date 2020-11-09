import { Answer } from '../answer/answer';
export class Question {
    title: string;
    description: string;
    createdAt?:Date;
    icon?: string;
    answers: Answer[];

    //cada vez que se cree una pregunta se llamara a este constructor
    constructor(
        title: string,
        description: string,
    createdAt?:Date,
    icon?: string,
    ){
       this.title = title;
       this.description = description;
       this.createdAt = createdAt;
       this.icon = icon;
       this.answers = [];
    }

}
