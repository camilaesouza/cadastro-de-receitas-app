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

  filterRecipes() {
    this.recipeService.getAll().subscribe((data) => {
      if (data) {
        this.recipes = data;
      }
    });

    let query = this.query.nativeElement.value;
    if (!query || query.trim() == '') {
      return this.queryChange.emit(this.recipes);
    }

    this.recipeService.getByName(query).subscribe((data) => {
      if (data) {
        this.filteredRecipes = data;
        this.queryChange.emit(this.filteredRecipes);
      }
    });
  }
}
