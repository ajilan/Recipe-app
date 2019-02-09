import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe [] = [
    new Recipe ('A Test Recipe' , 'This is simply a test', 'https://pinchofyum.com/wp-content/uploads/Chili-Sesame-Zoodles-Recipe.jpg' )
  ];
  

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}


