import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})

export class RecipeService {
  URL = 'http://localhost:3000/recipes';

  async getAll(): Promise<Recipe[]> {
    let recipes: Recipe[] = [];

    await axios({
      method: "get",
      url: this.URL
    }).then(function (response) {
        if (response && response.data) {
         recipes = response.data
        }
    }).catch(() => {
      recipes = [];
    });

    return recipes;
  }

  async getByName(query: string): Promise<Recipe[]> {
    let recipes: Recipe[] = [];

    await axios({
      method: "get",
      url: `${this.URL}?name=${query}`
    }).then(function (response) {
        if (response && response.data) {
          recipes = response.data
        }
    }).catch(() => {
      recipes = [];
    });

    return recipes;
  }

  async getById(id: String): Promise<Recipe | null> {
    let recipe: Recipe | null = null;

    await axios({
      method: "get",
      url: `${this.URL}/${id}`
    }).then(function (response) {
        if (response && response.data) {
          recipe = response.data
        }
    }).catch(() => {
      recipe = null;
    });

    return recipe;
  }

  async create(recipe: Recipe): Promise<boolean> {
    let create = false;

    await axios.post(this.URL, recipe)
    .then(function (response) {
        console.log(response);
        if (response && response.data) {
         create = true;
        }
    }).catch(() => {
      create = false;
    });

    return create;
  }
}
