export class Quote {
    public showDescription:boolean;
    constructor(public author:string, public description:string, public submitter:string, public like:number, public dislike:number, public publishDate:Date){
        this.showDescription = false;
    }

}
