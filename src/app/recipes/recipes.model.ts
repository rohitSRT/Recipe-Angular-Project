import { Ingredients } from "../Shared/Ingredients.model";

export class Recipe {
    public name: String;
    public description :String;
    public imagePath:String;
    public ingredients:Ingredients[]

    constructor(name:String, description:String, imagePath: String,ingredients:Ingredients[]){
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
        this.ingredients= ingredients;
    }
}