import { allRecipes } from "./script";
import { Display } from "./ui";

export class RecipeDetails extends Display {
  constructor(id) {
    this.index = id;
    this.mealName = strMeal;
    this.image = allRecipes[id].strMealThumb;
    this.instruction = allRecipes[id].strInstructions;
    this.area = allRecipes[id].strArea;
    this.category = allRecipes[id].strCategory;
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        const combined = `${measure.trim()} ${ingredient.trim()}`;
        ingredients.push(combined);
      }
    }
    // The ingredients array now contains the merged non-empty ingredient and measure pairs
  }
}
