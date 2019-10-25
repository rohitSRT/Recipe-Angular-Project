import { Ingredients } from "../Shared/Ingredients.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredients[]>();
    startediting = new Subject<number>();
    private ingredients:Ingredients[]=[
        new Ingredients('Apple',20),
        new Ingredients('Tomatoes',10)
    ];

    selectedIngredients(){
        return this.ingredients.slice();
    }

    selectedIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredients(ingredient:Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredientsfromRecipeList(ingredient:Ingredients[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    updateIngredient(Index:number,newingredient :Ingredients)
    {
        this.ingredients[Index] = newingredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredients(index:number)
    {
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}