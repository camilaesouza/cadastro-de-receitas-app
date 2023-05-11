import { Component } from '@angular/core';
import { Recipe } from '../model/recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes-show',
  templateUrl: './recipes-show.component.html',
  styleUrls: ['./recipes-show.component.css']
})
export class RecipesShowComponent {
  recipe: Recipe | any;
  recipeId: String = '';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    ) {}

  async ngOnInit() {
    const recipeId = this.route.snapshot.params['id'];
    this.recipeId = recipeId ? recipeId : '0';

    this.recipe = await this.recipeService.getById(this.recipeId);

    console.log('log', this.recipe);
  }
}
