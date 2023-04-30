import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent {
  @ViewChild('form') form!: NgForm;

  recipe!: Recipe;
  recipes!: Recipe[];

  title: string = "";
  description: string = "";
  author: string = "";
  value: string = "";
  prepare: string = "";

  message: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit() {
    this.recipes = [];

    let recipesLocal = localStorage.getItem('recipes');
    if(recipesLocal && JSON.parse(recipesLocal)) {
      this.recipes = JSON.parse(recipesLocal);
    }

    let id = 0;
    if (this.recipes && this.recipes.length > 0) {
       id = this.recipes[this.recipes.length-1].id;
    }

    this.recipe = new Recipe(
      id+1,
      this.title,
      this.author,
      parseFloat(this.value),
      this.description,
      this.prepare
    );

    this.recipes.push(this.recipe);
    localStorage.setItem('recipes', JSON.stringify(this.recipes));

    this.message = 'Sucesso receita cadastrada!';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => this.router.navigate(['/receitas', this.recipe.id]), 5000);
  }
}
