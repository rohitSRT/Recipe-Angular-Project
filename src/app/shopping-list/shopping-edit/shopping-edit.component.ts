import { Component, OnInit, ViewChild, ElementRef, Output,EventEmitter, OnDestroy } from '@angular/core';
import { Ingredients } from '../../Shared/Ingredients.model';
import { ShoppingListService } from '../shopping-list-service.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  //@ViewChild('nameInput') inputName :ElementRef;
  //@ViewChild('amountInput') inputAmount :ElementRef;

  @ViewChild('f')
  shoppigListForm : NgForm;

  subscription : Subscription;
  editmode =false;
  editedItemIndex :number;
  editedItem : Ingredients;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.shoppingListService.startediting.subscribe(
      (index:number) => {
          this.editmode=true;
          this.editedItemIndex=index;
          this.editedItem=this.shoppingListService.selectedIngredient(index);
          this.shoppigListForm.setValue({
            name:this.editedItem.name,
            amount:this.editedItem.amount
          })
      }
    );
  }

  onSubmit(form:NgForm){
    //const name = this.inputName.nativeElement.value;
    //const amount = this.inputAmount.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredients(value.name,value.amount);
    if(this.editmode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
    } else{
      this.shoppingListService.addIngredients(newIngredient);
    }
    this.shoppigListForm.reset()
    this.editmode=false;

  }
  clearForms(){

    this.shoppigListForm.reset();
   this.editmode=false;
  }

  Ondelete(){
    
    this.shoppingListService.deleteIngredients(this.editedItemIndex);
    this.clearForms();

  }
  

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  

}
