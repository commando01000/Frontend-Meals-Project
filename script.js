var sideNavbarWidth = $(".side-navbar").outerWidth();
var sidebarButtonLayer = $(".toggle-layer").width();
var sidebarWidth = $(".sidebar").width();
// console.log(sideNavbarWidth);
// console.log(sidebarWidth);

var isSidebarOpen = true;
$(".sidebar ul").hide();
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

let Recipes = new recipes();
export let allRecipes;
allRecipes = await Recipes.getAllRecipes();
console.log(await allRecipes);
Recipes.displayMeals(allRecipes);

$(".col-md-3").click(function (e) {
  var nextMeal = $(this).find(".meal").data("id");
  console.log(nextMeal);
});
