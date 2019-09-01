import { Injectable } from '@angular/core';
import { Cocktail } from '../class/cocktail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktailList =  [
    new Cocktail('Mojito', 10, 'https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg'),
    new Cocktail ('Cuba Libre', 10, 'https://cutt.ly/Fooego'),
    new Cocktail ('Jagger Bomb', 10, 'https://i.ytimg.com/vi/eKyEknX7iLE/maxresdefault.jpg')
  ];

  pathCocktail = '../../assets/cocktails.json';

  constructor(public http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]> {
    const jsonObject: Observable<any> = this.http.get(this.pathCocktail);
    const treatment = (paramData: any) => {
      return paramData as Cocktail[];
    };
    return jsonObject.pipe(map(treatment));
  }
}
