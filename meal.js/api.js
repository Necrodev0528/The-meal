const mealsDiv = document.getElementById("meals");

// Display Function
function displayMeals(meals) {
  mealsDiv.innerHTML = "";

  if (!meals) {
    mealsDiv.innerHTML = "<p>No food found</p>";
    return;
  }

  meals.forEach(meal => {
    mealsDiv.innerHTML += `
      <div class="meal">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3>${meal.strMeal}</h3>
      </div>
    `;
  });
}

// Search by Name
function searchMeal() {
  const query = document.getElementById("searchInput").value.trim();

  if (!query) {
    alert("Type a food name");
    return;
  }

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    .catch(err => console.error("Fetch error:", err));
}

// Search by Category
function searchByCategory(category) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    .catch(err => console.error("Category fetch error:", err));
}

// Load Random Meals on Page Load
function loadRandomMeals() {
  mealsDiv.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(data => displayMeals([data.meals[0]]))
      .catch(err => console.error("Random fetch error:", err));
  }
}

window.onload = loadRandomMeals;
