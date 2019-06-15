import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { YodaComponent } from './components/yoda/yoda.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

const routes: Routes = [
  {
    path: 'cocktails', component: CocktailListComponent
  },
  {
    path: 'developer', component: DeveloperComponent
  },
  {
    path: '', redirectTo: 'user', pathMatch: 'full'
  },
  {
    path: 'form', component: YodaComponent
  },
  {
    path: 'movie', component: SearchMovieComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'user', component: UserProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
