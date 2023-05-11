import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../model/recipe';
import { RecipeService } from '../services/recipe.service';

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
  messageError: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  async onSubmit() {
    this.recipes = await this.recipeService.getAll();

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

    let hasSuccess = await this.recipeService.create(this.recipe);

    if (hasSuccess) {
      this.message = 'Sucesso receita cadastrada!';
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => this.router.navigate(['/receitas', this.recipe.id]), 5000);
    } else {
      this.messageError = 'Houve um erro ao cadastrar a receita, tente novamente mais tarde!';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
