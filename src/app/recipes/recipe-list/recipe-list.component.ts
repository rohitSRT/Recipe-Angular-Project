import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  //providers: [RecipeService]
})
export class RecipeListComponent implements OnInit,OnDestroy {

  recipes:Recipe[]
  subscr : Subscription;

  constructor(private recipeService:RecipeService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.subscr=this.recipeService.recipeEditing.subscribe(
      (recipe:Recipe[])=>{
        this.recipes=recipe;
      }
    )
    this.recipes = this.recipeService.getDetails();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

  ngOnDestroy(){
    this.subscr.unsubscribe();

  }

  // @Output()
  // recipeListselected =new EventEmitter<Recipe>();
  // onRecipeSelected(selected:Recipe)
  // {
  //   //this.recipeListselected.emit(selected);
  // }

}
