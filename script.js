var sideNavbarWidth = $(".side-navbar").outerWidth();
var sidebarButtonLayer = $(".toggle-layer").width();
var sidebarWidth = $(".sidebar").width();
// console.log(sideNavbarWidth);
// console.log(sidebarWidth);

$(".sidebar ul").hide();

var isSidebarOpen = true;

$(".toggle-button").click(function (e) {
  if (isSidebarOpen) {
    $(".side-navbar").animate(
      {
        left: 0,
      },
      1000
    );
    // $("").show();
    $(".sidebar ul").slideDown(1600, function () {});
  } else {
    $(".side-navbar").animate(
      {
        left: -sideNavbarWidth,
      },
      1000
    );
    // $("").hide();
    $(".sidebar ul").slideUp(500, function () {});
  }
  isSidebarOpen = !isSidebarOpen;
});

$(".btn-close").click(function (e) {
  $(".sidebar-toggler").animate(
    {
      left: sideNavbarWidth - 10 + sidebarButtonLayer * 2,
    },
    400
  );
  isSidebarOpen = !isSidebarOpen;
});

import { recipes } from "./recipes.js";
import { RecipeDetails } from "./recipeDetails.js";

let Recipes = new recipes();
export let allRecipes;
allRecipes = await Recipes.getAllRecipes();
console.log(await allRecipes);
Recipes.displayMeals(allRecipes);
// let recipeDetails = new RecipeDetails(52977);
// console.log(recipeDetails);
// recipeDetails.displayMeal(recipeDetails);
$(".col-md-3").click(function (e) {
  var nextMeal_id = $(this).find(".meal").data("id");
  $("#meals").hide();
  $("#meal-details").removeClass("d-none");
  $("#meal-details").addClass("d-flex");
  $("#meal-details").addClass("animate__backInDown");
  let recipe = new RecipeDetails(nextMeal_id);
  recipe.displayMeal(recipe);
});

$(".btn-close").click(function (e) { 
  $("#meal-details").removeClass("d-flex");
  $("#meal-details").removeClass("animate__backInDown");
  $("#meal-details").addClass("animate__backOutDown");
  setTimeout(function () {
    $("#meal-details").addClass("d-none");
    $("#meals").show();
    $("#meal-details").removeClass("animate__backOutDown");
  }, 800);
});