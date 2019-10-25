import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredients } from "../Shared/Ingredients.model";
import { ShoppingListService } from "./shopping-list-service.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-shopping-list',
    templateUrl:'./shopping-list.component.html',
    //providers:[ShoppingListService]
})

export class ShoppingList implements OnInit,OnDestroy {

ingredients:Ingredients[];
private subsciption : Subscription;
constructor(private shoppingListService:ShoppingListService){}
ngOnInit(){
    this.ingredients= this.shoppingListService.selectedIngredients();
    this.subsciption =this.shoppingListService.ingredientChanged.subscribe(
        (ingredients:Ingredients[]) =>{
            this.ingredients=ingredients;
        }
    )
}

onEdititem(index:number){
    this.shoppingListService.startediting.next(index);
}

ngOnDestroy(){
    this.subsciption.unsubscribe();
}
}