import { Component, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../model/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('query') query!: ElementRef;

  filteredRecipes: Recipe[] = [];
  recipes: Recipe[] = [];

  @Output() queryChange = new EventEmitter<Recipe[]>();

  constructor(private recipeService: RecipeService) {}

  async filterRecipes(): Promise<void> {
    this.recipes = await this.recipeService.getAll();

    let query = this.query.nativeElement.value;
    if (!query || query.trim() == '') {
      return this.queryChange.emit(this.recipes);
    }

    this.filteredRecipes = await this.recipeService.getByName(query);
    this.queryChange.emit(this.filteredRecipes);
  }
}
