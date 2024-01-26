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

  displayMealByID(meal) {}
}
