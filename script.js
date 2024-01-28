var sideNavbarWidth = $(".side-navbar").outerWidth();
var sidebarButtonLayer = $(".toggle-layer").width();
// console.log(sideNavbarWidth);
// console.log(sidebarWidth);

$(".sidebar ul").hide();
$("#categories").hide();
$("#contact-us").hide();
$("#area").hide();
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
import { Categories } from "./categories.js";
import { Area } from "./area.js";

let Recipes = new recipes();
let categories = new Categories();
let area = new Area();

export let allRecipes;
export let allCategories;
export let allAreas;
export let recipe_details_by_category;
export let allAreaRecipes;

allRecipes = await Recipes.getAllRecipes();
console.log(await allRecipes);
Recipes.displayMeals(await allRecipes);

allAreas = await area.getAllAreas();
console.log(await allAreas);

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

let navLinks = document.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
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
      console.log(e.target.text);
    }
    if (e.target.text == "Categories") {
      $("#meals").hide();
      search.classList.add("d-none");
      search.classList.remove("d-flex");
      $("#contact-us").addClass("d-none");
      $("#contact-us").removeClass("d-flex");
      $("#area").hide();
      $("#categories").show();
      $(".side-navbar").animate(
        {
          left: -sideNavbarWidth,
        },
        1000
      );
      // $("").hide();
      $(".sidebar ul").slideUp(500, function () {});
      isSidebarOpen = !isSidebarOpen;
      getAllCategories();
    }
    if (e.target.text == "Area") {
      $("#meals").hide();
      $("#categories").hide();
      $("#contact-us").addClass("d-none");
      $("#contact-us").removeClass("d-flex");
      search.classList.add("d-none");
      search.classList.remove("d-flex");
      $("#area").show();
      $(".side-navbar").animate(
        {
          left: -sideNavbarWidth,
        },
        1000
      );
      // $("").hide();
      isSidebarOpen = !isSidebarOpen;
      getAllAreas();
    }
    if (e.target.text == "Contact Us") {
      $("#meals").hide();
      $("#categories").hide();
      $("#area").hide();
      $("#meal-details").addClass("d-none");
      $("#meal-details").removeClass("d-flex");
      search.classList.add("d-none");
      search.classList.remove("d-flex");

      $("#contact-us").addClass("d-flex");
      $("#contact-us").removeClass("d-none");

      $(".side-navbar").animate(
        {
          left: -sideNavbarWidth,
        },
        1000
      );
      // $("").hide();
      isSidebarOpen = !isSidebarOpen;
      displayContactUsForm();
    }
  });
});

async function getAllAreas() {
  allAreas = await area.getAllAreas();
  area.displayAreas(await allAreas);
  // console.log(await allAreas);
  $("#area .col-md-4").click(async function (e) {
    // console.log($(this).find(".area-name").text());
    let area_name = $(this).find(".area-name").text();

    allAreaRecipes = await Recipes.getRecipesByArea(area_name);
    console.log(await allAreaRecipes);

    Recipes.displayMeals(allAreaRecipes);

    console.log(allAreaRecipes);

    $(".col-md-3").click(async function (e) {
      var nextMeal_id = $(this).find(".meal").data("id");
      $("#meals").hide();
      $("#meal-details").removeClass("d-none");
      $("#meal-details").addClass("d-flex");
      $("#meal-details").addClass("animate__backInDown");

      let my_recipe = await Recipes.getRecipeByDetailsByID(nextMeal_id);

      console.log(await my_recipe[0].idMeal);

      let my_recipe_details = new RecipeDetails(-1);

      my_recipe_details = my_recipe_details.setNewMealDetails(await my_recipe);
      my_recipe_details.displayMeal(my_recipe_details);

      console.log(await my_recipe);
      console.log(await my_recipe_details);
    });

    $("#meals").show();
    $("#area").hide();
  });
}

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

async function getAllCategories() {
  allCategories = await categories.getCategories();
  // console.log(await allCategories);
  categories.displayCategories(allCategories);

  $(".col-md-3").click(async function (e) {
    var category_name = $(this).find("h3").text();
    // console.log(category_name);
    allRecipes = await Recipes.getRecipesByCategory(category_name);
    console.log(await allRecipes);
    Recipes.displayMeals(allRecipes);
    $("#categories").hide();
    $("#meals").show();
    $(".col-md-3").click(async function (e) {
      allRecipes = "";
      var nextMeal_id = $(this).find(".meal").data("id");
      $("#meals").hide();
      $("#meal-details").removeClass("d-none");
      $("#meal-details").addClass("d-flex");
      $("#meal-details").addClass("animate__backInDown");
      let recipee = await Recipes.getRecipeByDetailsByID(nextMeal_id);
      // console.log(recipee);
      // console.log(recipee[0].idMeal);
      // console.log(recipee[0]);
      // console.log(allRecipes);
      recipe_details_by_category = recipee;
      let recipe_details = new RecipeDetails(recipee[0].idMeal);
      // console.log(recipe_details);
      recipe_details = recipe_details.setNewMealDetailsCategory();
      recipe_details.displayMealDetailsInCategoryByID(recipe_details);
      // console.log(recipe_details);
    });
  });
}

function displayContactUsForm() {
  $("#contact-us").show();
  $("#contact-us").addClass("d-flex");
  $("#contact-us").addClass("align-items-center");
  $("#meals").hide();
  $("#categories").hide();
  $("#area").hide();
  $("#meal-details").addClass("d-none");
  $("#meal-details").removeClass("d-flex");
  search.classList.add("d-none");
  search.classList.remove("d-flex");
}

$("#email").keyup(function (e) {
  var validRegexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  var Email = $("#email").val();

  var validEmail = validRegexEmail.test(Email);

  if (!validEmail) {
    $("#emailAlert").removeClass("d-none");
    $("#emailAlert").addClass("d-block");
  } else if (Email == "") {
    $("#emailAlert").removeClass("d-block");
    $("#emailAlert").addClass("d-none");
  } else {
    $("#emailAlert").addClass("d-none");
    $("#emailAlert").removeClass("d-block");
  }
});

$("#email").blur(function (e) {
  var validRegexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  var Email = $("#email").val();

  console.log("GGGGGGG");

  var validEmail = validRegexEmail.test(Email);

  console.log(validEmail);

  if (!validEmail) {
    $("#emailAlert").removeClass("d-none");
    $("#emailAlert").addClass("d-block");
  } else if (Email == "") {
    $("#emailAlert").removeClass("d-block");
    $("#emailAlert").addClass("d-none");
  } else {
    $("#emailAlert").addClass("d-none");
    $("#emailAlert").removeClass("d-block");
  }
});

$("#phone").keyup(function (e) {
  var validRegexPhone = /^01[0-2]\d{1,8}$/;

  var Phone = $("#phone").val();

  var validPhone = validRegexPhone.test(Phone);

  console.log(validPhone);

  if (!validPhone) {
    $("#phoneAlert").removeClass("d-none");
    $("#phoneAlert").addClass("d-block");
  } else if (Phone == "") {
    $("#phoneAlert").removeClass("d-block");
    $("#phoneAlert").addClass("d-none");
  } else {
    $("#phoneAlert").addClass("d-none");
    $("#phoneAlert").removeClass("d-block");
  }
});

$("#phone").blur(function (e) {
  var validRegexPhone = /^01[0-2]\d{1,8}$/;

  var Phone = $("#phone").val();

  var validPhone = validRegexPhone.test(Phone);

  console.log(validPhone);

  if (!validPhone) {
    $("#phoneAlert").removeClass("d-none");
    $("#phoneAlert").addClass("d-block");
  } else if (Phone == "") {
    $("#phoneAlert").removeClass("d-block");
    $("#phoneAlert").addClass("d-none");
  } else {
    $("#phoneAlert").addClass("d-none");
    $("#phoneAlert").removeClass("d-block");
  }
});

$("#age").keyup(function (e) {
  var age_regex = /^\S[0-9]{0,3}$/;

  var Age = $("#age").val();

  var validAge = age_regex.test(Age);

  if (!validAge) {
    $("#ageAlert").removeClass("d-none");
    $("#ageAlert").addClass("d-block");
  } else if (Age == "") {
    $("#ageAlert").removeClass("d-block");
    $("#ageAlert").addClass("d-none");
  } else {
    $("#ageAlert").addClass("d-none");
    $("#ageAlert").removeClass("d-block");
  }
});

$("#password").keyup(function (e) {
  var validRegexPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  var password = $("#password").val();

  var validPassword = validRegexPassword.test(password);

  if (!validPassword) {
    $("#passwordAlert").removeClass("d-none");
    $("#passwordAlert").addClass("d-block");
  } else if (password == "") {
    $("#passwordAlert").removeClass("d-block");
    $("#passwordAlert").addClass("d-none");
  } else {
    $("#passwordAlert").addClass("d-none");
    $("#passwordAlert").removeClass("d-block");
  }
});

$("#re-password").keyup(function (e) {
  var password = $("#password").val();
  var rePassword = $("#re-password").val();

  if (rePassword !== password) {
    $("#re-passwordMatchAlert").removeClass("d-none");
    $("#re-passwordMatchAlert").addClass("d-block");
  } else {
    $("#re-passwordMatchAlert").addClass("d-none");
    $("#re-passwordMatchAlert").removeClass("d-block");
  }
});
