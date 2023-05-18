import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class RecipeService {
  URL = 'http://localhost:3000/recipes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Recipe[]>(this.URL, this.httpOptions);
  }

  getByName(query: string) {
    return this.httpClient.get<Recipe[]>(`${this.URL}?name_like=${query}`, this.httpOptions);
  }

  getById(id: String) {
    return this.httpClient.get<Recipe>(`${this.URL}/${id}`, this.httpOptions);
  }

  create(recipe: Recipe) {
    return this.httpClient.post<Recipe>(this.URL, recipe, this.httpOptions);
  }
}
