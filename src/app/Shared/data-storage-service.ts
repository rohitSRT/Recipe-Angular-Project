import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe-service.service";
import { Recipe } from "../recipes/recipes.model";
import { map, tap } from "rxjs/operators";
import { Ingredients } from "./Ingredients.model";

@Injectable()
export class DataStorageService{

    constructor(private httpclient:HttpClient, private recipeService:RecipeService){

    }

    onDataSave(){

        const recipes = this.recipeService.getDetails();

        if (recipes.length!==0){
        this.httpclient.
        put('https://ng-recipe-angular-app-8b950.firebaseio.com/Recipes.json',recipes).
        subscribe(responseData=>{
            console.log(responseData)
        });
    }
    }

    onFetchRecipe(){
       return this.httpclient.get<Recipe[]>('https://ng-recipe-angular-app-8b950.firebaseio.com/Recipes.json').
        pipe(map(recipes=>recipes ? recipes.map(recipe =>({ingredients:[],...recipe})):[]),
        tap(recipes =>
            this.recipeService.setRecipes(recipes)
        ));
        
        //pipe(map(recipes=>{
         //   return recipes.map(recipe =>{
          //      return {...recipe,ingredients:recipe.ingredients ? recipe.ingredients:[]}
           // });
      //  }))
        //.subscribe(recipes =>{
        //    this.recipeService.setRecipes(recipes);
        //});
    }

}