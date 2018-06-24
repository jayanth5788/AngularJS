import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingerdients: Ingredient[] = [
    new Ingredient('Tomatoes', 2),
    new Ingredient('Cheese', 5)
  ];
  constructor() { }

  getIngredients() {
    return this.ingerdients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingerdients.push(ingredient);
    this.ingredientsChanged.emit(this.ingerdients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
  //   for (let ingredient of this.ingerdients) {

  //   }
  this.ingerdients.push(...ingredients);
  this.ingredientsChanged.emit(this.ingerdients.slice());
  }
}
