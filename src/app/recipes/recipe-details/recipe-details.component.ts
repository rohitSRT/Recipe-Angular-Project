import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingListService } from '../../shopping-list/shopping-list-service.service';
import { RecipeService } from '../recipe-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  //@Input()
  recipe:Recipe;
  id:number;
  constructor(private recipeService:RecipeService, private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {

    this.route.params
    .subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
      }
    )
  }
  toShoppingList(){ 
    this.recipeService.addIngredientstoShoppingList(this.recipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }

  onEdit(){
    //below both are correct
    //this.router.navigate(['edit'],{relativeTo:this.route});
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
