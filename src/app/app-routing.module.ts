import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesShowComponent } from './recipes-show/recipes-show.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {path: 'receitas', component: RecipesComponent},
  {path: 'receitas/:id', component: RecipesShowComponent},
  // {path: '*', component: NotFoundErrorComponent},
  {path: '', redirectTo: 'receitas', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
