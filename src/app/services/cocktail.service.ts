import { Injectable } from '@angular/core';
import { Cocktail } from '../class/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktailList =  [
    new Cocktail('Mojito', 10, 'https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg'),
    new Cocktail ('Cuba Libre', 10, 'https://cutt.ly/Fooego'),
    new Cocktail ('Jagger Bomb', 10, 'https://i.ytimg.com/vi/eKyEknX7iLE/maxresdefault.jpg')
  ];

  constructor() { }

  getCocktails() {
    return this.cocktailList;
  }
}
