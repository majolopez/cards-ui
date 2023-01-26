import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CatergoriesComponent } from './catergories/catergories.component';
import { CategoryService } from './catergories/category.service';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CatergoriesComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'categories', component: CatergoriesComponent},
      { path: 'cards/:id', component: CardsComponent },
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
