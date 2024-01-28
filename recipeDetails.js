import { allRecipes } from "./script.js";
import { Display } from "./ui.js";
import { recipe_details_by_category } from "./script.js";

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
      } else {
        // console.log(recipe_details_by_category);
        // this.index = recipe_details_by_category[0].idMeal;
        // this.mealName = recipe_details_by_category[0].strMeal;
        // this.image = recipe_details_by_category[0].strMealThumb;
        // this.instruction = recipe_details_by_category[0].strInstructions;
        // this.area = recipe_details_by_category[0].strArea;
        // this.category = recipe_details_by_category[0].strCategory;
        // this.youtube = recipe_details_by_category[0].strYoutube;
        // this.source = recipe_details_by_category[0].strSource;
        // for (let j = 1; j <= 20; j++) {
        //   const ingredient = recipe_details_by_category[0][`strIngredient${j}`];
        //   const measure = recipe_details_by_category[0][`strMeasure${j}`];
        //   if (ingredient && ingredient.trim() !== "") {
        //     const combined = `${measure.trim()} ${ingredient.trim()}`;
        //     this.ingredients.push(combined);
        //   }
        // }
        // break;
        // console.log(this.ingredients);
      }
    }
    return this;
  }
  setNewMealDetailsCategory() {
    console.log(recipe_details_by_category);
    this.index = recipe_details_by_category[0].idMeal;
    this.mealName = recipe_details_by_category[0].strMeal;
    this.image = recipe_details_by_category[0].strMealThumb;
    this.instruction = recipe_details_by_category[0].strInstructions;
    this.area = recipe_details_by_category[0].strArea;
    this.category = recipe_details_by_category[0].strCategory;
    this.youtube = recipe_details_by_category[0].strYoutube;
    this.source = recipe_details_by_category[0].strSource;
    for (let j = 1; j <= 20; j++) {
      const ingredient = recipe_details_by_category[0][`strIngredient${j}`];
      const measure = recipe_details_by_category[0][`strMeasure${j}`];
      if (ingredient && ingredient.trim() !== "") {
        const combined = `${measure.trim()} ${ingredient.trim()}`;
        this.ingredients.push(combined);
      }
    }
    return this;
  }

  setNewMealDetails(meal) {
    console.log(meal);
    this.index = meal[0].idMeal;
    this.mealName = meal[0].strMeal;
    this.image = meal[0].strMealThumb;
    this.instruction = meal[0].strInstructions;
    this.area = meal[0].strArea;
    this.category = meal[0].strCategory;
    this.youtube = meal[0].strYoutube;
    this.source = meal[0].strSource;
    for (let j = 1; j <= 20; j++) {
      const ingredient = meal[0][`strIngredient${j}`];
      const measure = meal[0][`strMeasure${j}`];
      if (ingredient && ingredient.trim() !== "") {
        const combined = `${measure.trim()} ${ingredient.trim()}`;
        this.ingredients.push(combined);
      }
    }
    return this;
  }
  
  displayMeal(meal) {
    this.displayMealByID(meal);
  }
  displayMealInCategory(meal) {
    this.displayMealDetailsInCategoryByID(meal);
  }
}
