import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ICategory } from './category';
import { CategoryService } from './category.service';
@Component({
  selector: 'app-catergories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class CategoriesComponent implements OnInit{
  constructor(private categoryService: CategoryService){}

  
  flip: string = 'inactive';
  sub: Subscription | undefined;
  categories: ICategory[]= [];
  errorMessage: string= '';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  ngOnInit(): void{
    this.sub = this.categoryService.getCategories().subscribe({
      next: categories => {
        this.categories = categories;
        
      },
      error: err => this.errorMessage = err
    });
  }


  getCards(categoryId: string):void {
    alert(categoryId)

  }

  addCategory() {
    
  }
}
