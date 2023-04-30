import { Component, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipes: Recipe[];

  constructor() {
    this.recipes = [];
  }

  ngOnInit() {
    let recipesLocal = localStorage.getItem('recipes');
    if(recipesLocal && JSON.parse(recipesLocal)) {
      this.recipes = JSON.parse(recipesLocal);
    }

    if (this.recipes.length == 0) {
      this.recipes.push(
        new Recipe(
          1,
          'Bolo de chocolate',
          'Camila Souza',
          12.50,
          'delicioso para seu café',
          'Misture uma xicara de chocolate em pó, o mesmo de trigo, um ovo, 1 copo de agua morna, meia xicara de oleo, mexa até ficar homogeno e coloque asar po 45 minutos'
        )
      );

      localStorage.setItem('recipes', JSON.stringify(this.recipes));
    }
  }

  onSearchRecipes(recipes: Recipe[]):void {
    this.recipes = recipes;
  }
}
