import { Display } from "./ui.js";

export class Categories extends Display {
  async getCategories() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`,
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
    return responseData.categories;
  }
  displayCategories(categories) {
    this.displayAllCategories(categories);
  }
}
