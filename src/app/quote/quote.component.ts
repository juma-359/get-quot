import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'
//import { globalAgent } from 'http';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  submitted = false;
  quotes = [
    new Quote("Jael", "Programs must be written for people to read, and only incidentally for machines to execute.", "Mathai", 0,0, new Date(2020,4,1)),
    new Quote("Jason","OOP, offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches.", "Alexander",0,0,new Date(2020,3,11)),
    new Quote("George", "Stop watching football, watch Manchester United... Only the dead will never die!!!", "Kinyanjui", 0,0, new Date(2019,3,21)),
  ]
  
  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete= confirm(`Are you sure you want to delete ${this.quotes[index].author} ?`);
        if (toDelete){
          this.quotes.splice(index,1);
        }
    }
  }
  addNewQuote(quote){
    //this.submitted = true;
    //let quoteLength = this.quotes.length;
    //quote.author = quoteLength+1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)
    
  }
  likeQuote(likeQuote, index){
        if (likeQuote){
          this.quotes[index].like +=1;
        }
    }

    dislikeQuote(dislikeQuote, index){
      if (dislikeQuote){
        this.quotes[index].dislike +=1;
      }
    }
    quoteDetails(index){
      this.quotes[index].showDescription=!this.quotes[index].showDescription;
    }

    
  constructor() { }
  ngOnInit() {
  }

}
