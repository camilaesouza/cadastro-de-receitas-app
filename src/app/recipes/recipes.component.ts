import { Component, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    this.recipes = [];
  }

  ngOnInit() {
   this.recipeService.getAll().subscribe((data) => {
      if (data) {
        this.recipes = data;
      }
    });
  }

  onSearchRecipes(recipes: Recipe[]):void {
    this.recipes = recipes;
  }
}
