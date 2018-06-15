import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
  new Recipe('Pizza', 'Margharetta Pizza', 'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png'),
  new Recipe('Pizza', 'Pepperoni Pizza', 'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png'),
  new Recipe('Pizza', 'Chicken Sausage Pizza', 'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png')];
  constructor() { }

  ngOnInit() {
  }

}
