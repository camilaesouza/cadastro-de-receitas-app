import { Component, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../model/recipe';

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

  filterRecipes(): void {
    let recipesLocal = localStorage.getItem('recipes');
    if(recipesLocal && JSON.parse(recipesLocal)) {
      this.recipes = JSON.parse(recipesLocal);
    }

    let query = this.query.nativeElement.value;
    if (!query || query.trim() == '') {
      return this.queryChange.emit(this.recipes);
    }

    this.filteredRecipes = [];
    let vm = this;
    this.recipes.map(function(recipe) {
        let recipeName = recipe.name.toLowerCase();
        query = query.toLowerCase();

        if (recipeName === query || recipeName.includes(query)) {
          vm.filteredRecipes.push(recipe);
        }
    });

    this.queryChange.emit(this.filteredRecipes);
  }
}
