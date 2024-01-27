var sideNavbarWidth = $(".side-navbar").outerWidth();
var sidebarButtonLayer = $(".toggle-layer").width();
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
let searchwidth = $("#meals").width();
$(".search").css("width", searchwidth + "px");
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

let search = document.querySelector(".search");

document.querySelector("a").addEventListener("click", function (e) {
  if (e.target.text == "Search") {
    search.classList.remove("d-none");
    search.classList.add("d-flex");
    $("#meals").hide();
    $(".side-navbar").animate(
      {
        left: -sideNavbarWidth,
      },
      1000
    );
    // $("").hide();
    $(".sidebar ul").slideUp(500, function () {});
    isSidebarOpen = !isSidebarOpen;
  }
});

$("#meal-name").keyup(function (e) {
  $(".spoiler").removeClass("d-block");
  $(".spoiler").addClass("d-none");
  getMealsByName($("#meal-name").val());
});

$("#meal-letter").keyup(function (e) {
  $(".spoiler").removeClass("d-block");
  $(".spoiler").addClass("d-none");
  console.log($("#meal-letter").val()[0]);
  getMealsByFirstLetter($("#meal-letter").val()[0]);
});

$(".search").keydown(async function (e) {
  if (e.keyCode === 27) {
    $("#meals").show();
    search.classList.remove("d-flex");
    search.classList.add("d-none");
    allRecipes = await Recipes.getAllRecipes();
    Recipes.displayMeals(allRecipes);

    $(".col-md-3").click(function (e) {
      var nextMeal_id = $(this).find(".meal").data("id");
      $("#meals").hide();
      $("#meal-details").removeClass("d-none");
      $("#meal-details").addClass("d-flex");
      $("#meal-details").addClass("animate__backInDown");
      let recipe = new RecipeDetails(nextMeal_id);
      recipe.displayMeal(recipe);
    });
  }
});

async function getMealsByName(mealName) {
  allRecipes = await Recipes.getRecipesByName(mealName);
  console.log(allRecipes, "From Search !!!");
  Recipes.displayMeals(allRecipes);
  $("#meals").show();
  let searchwidth = $("#meals").width();
  $(".search").css("width", searchwidth + "px");

  $(".col-md-3").click(function (e) {
    var nextMeal_id = $(this).find(".meal").data("id");
    $("#meals").hide();
    $("#meal-details").removeClass("d-none");
    $("#meal-details").addClass("d-flex");
    $("#meal-details").addClass("animate__backInDown");
    let recipe = new RecipeDetails(nextMeal_id);
    recipe.displayMeal(recipe);
  });
}

async function getMealsByFirstLetter(mealFirstLetter) {
  allRecipes = await Recipes.getRecipesByLetter(mealFirstLetter);
  Recipes.displayMeals(allRecipes);
  $("#meals").show();

  let searchwidth = $("#meals").width();
  $(".search").css("width", searchwidth + "px");

  $(".col-md-3").click(function (e) {
    var nextMeal_id = $(this).find(".meal").data("id");
    $("#meals").hide();
    $("#meal-details").removeClass("d-none");
    $("#meal-details").addClass("d-flex");
    $("#meal-details").addClass("animate__backInDown");
    let recipe = new RecipeDetails(nextMeal_id);
    recipe.displayMeal(recipe);
  });
}

async function getMealsByCategory(Category) {
  allRecipes = await Recipes.getRecipesByCategory(Category);
  Recipes.displayMeals(allRecipes);
  $("#meals").show();

  let searchwidth = $("#meals").width();
  $(".search").css("width", searchwidth + "px");

  $(".col-md-3").click(function (e) {
    var nextMeal_id = $(this).find(".meal").data("id");
    $("#meals").hide();
    $("#meal-details").removeClass("d-none");
    $("#meal-details").addClass("d-flex");
    $("#meal-details").addClass("animate__backInDown");
    let recipe = new RecipeDetails(nextMeal_id);
    recipe.displayMeal(recipe);
  });
}