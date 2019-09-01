import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { DisplayMoviesDirective } from './directives/display-movies.directive';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './directives/hover.directive';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionComponent } from './components/question/question.component';

import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SkillComponent } from './components/skill/skill.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { YodaComponent } from './components/yoda/yoda.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    HoverDirective,
    DisplayMoviesDirective,
    MenuComponent,
    SearchMovieComponent,
    DeveloperComponent,
    DeveloperComponent,
    SkillComponent,
    YodaComponent,
    QuestionComponent,
    CocktailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
