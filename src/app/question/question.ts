export class Question {
    title: string;
    description: string;
    createdAt?:Date;
    icon?: string;

    //cada vez que se cree una pregunta se llamara a este constructor
    constructor(
        title: string,
        description: string,
    createdAt?:Date,
    icon?: string
    ){
       this.title = title;
       this.description = description;
       this.createdAt = createdAt;
       this.icon = icon;
    }

}
