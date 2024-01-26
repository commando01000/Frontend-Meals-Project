import { Display } from "./ui.js";

export class recipes extends Display {
  async getAllRecipes() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`,
      {
        headers: {
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
      }
    );
    const responseData = await response.json();
    return responseData.meals;
  }
  displayMeals(meals) {
    this.displayAllMeals(meals);
  }
}
