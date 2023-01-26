import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICard } from './card';
import { CardService } from './card.service';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit{
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;


  private _cardsFilter: string = ''

  constructor(private route: ActivatedRoute,
              private cardsService: CardService){}
  categoryId: any = ''
  sub: Subscription | undefined;

  get cardsFilter(): string  {
    return this._cardsFilter;
  }

  set cardsFilter(value:string)  {
     this._cardsFilter = value;
     this.filteredCards = this.perfomFilter(value)
  }

  filteredCards: ICard[] = []

  cards: ICard[] =[]
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')?.toString()
    this.sub = this.cardsService.getCardsByCategory(id!).subscribe(
      {next: cards => {
        this.cards = cards
        this.filteredCards = this.cards
      }}
    )

    
  }
  toggleShow(id: any) {
    this.cards = this.cards.map(card=> {
      if(card._id === id){
        card.showFront = !card.showFront
      }
      
      return card
    })
  }

  perfomFilter(filterBy: string): ICard[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.cards.filter((card: ICard) => 
    card.front.toLocaleLowerCase().includes(filterBy))
  }
}
