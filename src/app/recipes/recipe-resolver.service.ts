import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../Shared/data-storage-service";
import { Recipe } from "./recipes.model";
import { RecipeService } from "./recipe-service.service";

@Injectable()
export class RecipeResolverService implements Resolve<Recipe[]>{

    constructor(private dataStorageservice:DataStorageService,private recipeservice:RecipeService){

    }

    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot,){
       const recipes = this.recipeservice.getDetails();
        if(recipes.length===0){
        return this.dataStorageservice.onFetchRecipe();
        }
        else{
            return  recipes
        }
    }


}