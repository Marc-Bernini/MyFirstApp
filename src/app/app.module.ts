import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HoverDirective } from './directives/hover.directive';
import { DisplayMoviesDirective } from './directives/display-movies.directive';
import { MenuComponent } from './components/menu/menu.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { SkillComponent } from './components/skill/skill.component';

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
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
