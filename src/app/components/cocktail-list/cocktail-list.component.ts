import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/services/cocktail.service';
import { Cocktail } from '../../class/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.getCocktails()
    .subscribe(
      (cocktailList: Cocktail[]) => {
      this.cocktails = cocktailList;
    });
  }
}
