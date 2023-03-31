import { Component } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
    recipes: Recipe[];
    displayRecipesList: boolean;

    constructor() {
      this.recipes = [];
      this.displayRecipesList = true;
    }

    ngOnInit() {
      this.recipes.push(new Recipe('Bolo de chocolate', 'delicioso para seu café',
        'Misture uma xicara de chocolate em pó, o mesmo de trigo, um ovo, 1 copo de agua morna, meia xicara de oleo, mexa até ficar homogeno e coloque asar po 45 minutos'));
    }

    onShowRecipe() {
      this.displayRecipesList = !this.displayRecipesList;
    }
}
