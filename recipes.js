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
    viewLoading();
    function viewLoading() {
      $(".loader").removeClass("d-none");
      $(".loader").addClass("d-block");
    }
    if (response.ok) {
      $(".loader").removeClass("d-block");
      $(".loader").addClass("d-none");
      console.log("Success");
    } else {
      $(".loader").removeClass("d-none");
      $(".loader").addClass("d-block");
      console.log("Error");
    }
    const responseData = await response.json();
    return responseData.meals;
  }

  async getRecipesByName(mealName) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`,
      {
        headers: {
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
      }
    );
    viewLoading();
    function viewLoading() {
      $(".loader").removeClass("d-none");
      $(".loader").addClass("d-block");

    }
    if (response.ok) {
      $(".loader").removeClass("d-block");
      $(".loader").addClass("d-none");
      console.log("Success");
    } else {
      $(".loader").removeClass("d-none");
      $(".loader").addClass("d-block");
      console.log("Error");
    }
    const responseData = await response.json();
    return responseData.meals;
  }

  async getRecipesByLetter(mealLetter) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${mealLetter}`,
      {
        headers: {
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
      }
    );
    viewLoading();
    function viewLoading() {
      $(".loader").removeClass("d-none");
      $(".loader").addClass("d-block");
    }
    if (response.ok) {
      $(".loader").removeClass("d-block");
      $(".loader").addClass("d-none");
      console.log("Success");
    } else {
      $(".loader").removeClass("d-none");
      $(".loader").addClass("d-block");
      console.log("Error");
    }
    const responseData = await response.json();
    return responseData.meals;
  }

  async getRecipesByDetailsByID(mealID) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`,
      {
        headers: {
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
      }
    );
    viewLoading();
    function viewLoading() {
      $(".loader").removeClass("d-none");
      $(".loader").addClass("d-block");
    }
    if (response.ok) {
      $(".loader").removeClass("d-block");
      $(".loader").addClass("d-none");
      console.log("Success");
    } else {
      $(".loader").removeClass("d-none");
      $(".loader").addClass("d-block");
      console.log("Error");
    }
    const responseData = await response.json();
    return responseData.meals;
  }

  async getRecipesByCategory(Category) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`,
      {
        headers: {
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
      }
    );
    viewLoading();
    function viewLoading() {
      $(".loader").removeClass("d-none");
      $(".loader").addClass("d-block");

    }
    if (response.ok) {
      $(".loader").removeClass("d-block");
      $(".loader").addClass("d-none");
      console.log("Success");
    } else {
      $(".loader").removeClass("d-none");
      $(".loader").addClass("d-block");
      console.log("Error");
    }
    const responseData = await response.json();
    return responseData.meals;
  }

  displayMeals(meals) {
    this.displayAllMeals(meals);
  }
}
