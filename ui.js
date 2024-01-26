export class Display {
  displayAllMeals(meals) {
    const container = document.querySelector("#meals .container"); // Assuming you have a container element in your HTML
    container.innerHTML = ""; // Clear the existing content

    let row = document.createElement("div");
    row.classList.add("row", "text-white", "gx-3", "gy-3");

    meals.forEach((meal) => {
      const col = document.createElement("div");
      col.classList.add("col-md-3");

      const mealElement = document.createElement("div");
      mealElement.classList.add(
        "meal",
        "position-relative",
        "overflow-hidden",
        "rounded-2",
        "cursor-pointer"
      );
      mealElement.setAttribute("data-id", meal.idMeal);
      const imgElement = document.createElement("img");
      imgElement.classList.add("w-100");
      imgElement.src = meal.strMealThumb;
      imgElement.alt = meal.strMeal;

      const mealLayerElement = document.createElement("div");
      mealLayerElement.classList.add(
        "meal-layer",
        "position-absolute",
        "d-flex",
        "align-items-center",
        "justify-content-center",
        "text-black",
        "p-2"
      );
      mealLayerElement.innerHTML = `<h3>${meal.strMeal}</h3>`; // Replace meal.name with the actual name of the meal

      mealElement.appendChild(imgElement);
      mealElement.appendChild(mealLayerElement);
      col.appendChild(mealElement);
      row.appendChild(col);
    });

    container.appendChild(row);
  }

  displayMealByID(meal) {
    document.querySelector(".col-md-4 img").src = meal.image;
    document.querySelector(".col-md-4 img").alt = meal.mealName;
    document.querySelector(".col-md-4 h3").textContent = meal.mealName;
    document.querySelector(
      ".col-md-8 .instructions"
    ).innerHTML = `<h2><strong>Instructions:</strong></h2> <p> <br> ${meal.instruction}</p> `;
    document.querySelector(
      ".col-md-8 .area"
    ).innerHTML = `<h3> <strong>Area:</strong> ${meal.area} </h3>`;
    document.querySelector(
      ".col-md-8 .category"
    ).innerHTML = `<h3> <strong>Category:</strong> ${meal.category} </h3>`;

    const recipesDiv = document.querySelector(".col-md-8 .recipes");
    recipesDiv.innerHTML = "<h3>Ingredients:</h3><ul>";
    meal.ingredients.forEach((ingredient) => {
      const recipeDiv = document.createElement("div");
      recipeDiv.innerHTML = `<p>${ingredient}</p>`;
      recipesDiv.appendChild(recipeDiv);
    });
    console.log(meal.ingredients);
    recipesDiv.innerHTML += "</ul>";

    const tagsDiv = document.querySelector(".col-md-8 .tags");
    tagsDiv.innerHTML = `<a href="${meal.source}"><button class="btn btn-success">Source</button></a>
                         <a href="${meal.youtube}"><button class="btn btn-danger">Youtube</button></a>`;
    let width = $("#meal-details").width();
    $(".btn-close").css("left", width + "px");
  }
}
