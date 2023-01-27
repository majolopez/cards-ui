import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private router: Router,
              private categoryService: CategoryService
    ){}

  category: ICategory = {
    _id: '',
    name: ''
  };

back() {
  this.router.navigate(["categories"])
  
}

save(categoryName: string) {
  this.categoryService.addCategory(categoryName).subscribe(
      result =>  {
        this.router.navigate(['/categories'] )
    },
      error => console.log(error)
    )

}

}
