import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable(
// {
//   providedIn: 'root'
// }
)
export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Pizza', 'Margharetta Pizza', 'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png',
  [
    new Ingredient('tomatoes', 4),
    new Ingredient('meat', 2)
  ]
  ),
    new Recipe('Pizza', 'Pepperoni Pizza', 'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png',
  [
    new Ingredient('pepper', 3),
    new Ingredient('meat', 4)
  ]
  ),
    new Recipe('Pizza', 'Chicken Sausage Pizza', 'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png',
  [
    new Ingredient('black olives', 4),
    new Ingredient('meat', 6)
  ]
  )];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
