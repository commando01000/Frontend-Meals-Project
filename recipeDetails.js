import { allRecipes } from "./script.js";
import { Display } from "./ui.js";

export class RecipeDetails extends Display {
  constructor(id) {
    super();
    this.ingredients = [];
    for (var i = 0; i < allRecipes.length; i++) {
      if (allRecipes[i].idMeal == id) {
        this.index = id;
        this.mealName = allRecipes[i].strMeal;
        this.image = allRecipes[i].strMealThumb;
        this.instruction = allRecipes[i].strInstructions;
        this.area = allRecipes[i].strArea;
        this.category = allRecipes[i].strCategory;
        this.youtube = allRecipes[i].strYoutube;
        this.source = allRecipes[i].strSource;
        for (let j = 1; j <= 20; j++) {
          const ingredient = allRecipes[i][`strIngredient${j}`];
          const measure = allRecipes[i][`strMeasure${j}`];
          if (ingredient && ingredient.trim() !== "") {
            const combined = `${measure.trim()} ${ingredient.trim()}`;
            this.ingredients.push(combined);
          }
        }
        // console.log(this.ingredients);
      }
    }
    return this;
  }
  displayMeal(meal){
    this.displayMealByID(meal);
  }
}
