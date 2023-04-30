import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundErrorComponentComponent } from './not-found-error-component/not-found-error-component.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipesShowComponent } from './recipes-show/recipes-show.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {path: 'receitas', component: RecipesComponent},
  {path: 'receitas/:id', component: RecipesShowComponent},
  {path: 'criar-receita', component: RecipeCreateComponent},
  {path: '', redirectTo: 'receitas', pathMatch: 'full'},
  {path: '**', component: NotFoundErrorComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
