import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../catergories/category';
import { CategoryService } from '../catergories/category.service';
import { ICard } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  categoryId: any = "";

  originalCard: ICard =
  {
    _id: '',
    front: '',
    back: '',
    category: {
      _id: '',
      name: '',
    },
    level: 0,
    showFront: false
  }

  card: ICard = {...this.originalCard}

  constructor(private route: ActivatedRoute, 
              private cardsService: CardService,
              private router: Router){}

  save(card: ICard) {
    let categoryId:any = this.route.snapshot.paramMap.get('categoryId')?.toString() 
    card.category._id! = categoryId

    this.cardsService.saveCard(card).subscribe(

      result =>  {
        this.router.navigate(['/cards', result.category] )
    
    },
      error => console.log(error)
    )
    }



}
