import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
//import { RecipeService } from './recipe-service.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //providers:[RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe:Recipe;
  
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe:Recipe) => {
    //     this.selectedRecipe=recipe;
    //   }
    // )
  }

}
