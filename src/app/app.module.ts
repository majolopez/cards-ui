import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './categories/category.service';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './cards/card.component';
import { CategoryComponent } from './categories/category.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CategoriesComponent,
    WelcomeComponent,
    CardComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'categories', component: CategoriesComponent},
      { path: 'category', component: CategoryComponent},
      { path: 'cards/:id', component: CardsComponent },
      { path: 'card/:categoryId', component: CardComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo:'welcome', pathMatch:'full' }

    ]),
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
