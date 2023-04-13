import { Component } from '@angular/core';
import { Recipe } from '../model/recipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-show',
  templateUrl: './recipes-show.component.html',
  styleUrls: ['./recipes-show.component.css']
})
export class RecipesShowComponent {
  recipe!: Recipe;
  recipeId: String = '';

  constructor(
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    const recipeId = this.route.snapshot.params['id'];
    this.recipeId = recipeId ? recipeId : '0';

    let recipesLocal = localStorage.getItem('recipes');
    if(recipesLocal && JSON.parse(recipesLocal)) {
      let vm = this;
      JSON.parse(recipesLocal).map(function(recipe: Recipe) {
        if(recipe.id == vm.recipeId) {
          vm.recipe = recipe;
        }
      });
    }
  }
}
