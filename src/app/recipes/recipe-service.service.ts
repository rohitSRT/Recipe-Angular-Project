import { Recipe } from "./recipes.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../Shared/Ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list-service.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipeEditing = new Subject<Recipe[]>();
    recipes: Recipe[] = 
    [
        new Recipe('The test Name',
            'the Test description',
            'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
            [
                new Ingredients('Meat', 1),
                new Ingredients('French Fried', 20)
            ]),
        new Recipe('The test Name 2',
            'the Test description 2',
            'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
            [
                new Ingredients('buns', 3),
                new Ingredients('nuns', 5)
            ])
            ]

            constructor(private shoppingListService:ShoppingListService){}

    getDetails() {
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientstoShoppingList(ingredient: Ingredients[]){
        this.shoppingListService.addIngredientsfromRecipeList(ingredient);
    }

    addNewRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeEditing.next(this.recipes.slice());
    }
    updateRecipe(index:number,recipe:Recipe){
        this.recipes[index]=recipe;
        this.recipeEditing.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeEditing.next(this.recipes.slice());
    }
}