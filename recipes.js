const recipesDiv = document.getElementById("recipes");

/* ================= SEARCH MEALS ================= */
async function searchMeal() {
  const query = document.getElementById("searchInput").value.trim();

  if (!query) {
    alert("Enter a food name");
    return;
  }

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  const data = await res.json();

  recipesDiv.innerHTML = "";

  if (!data.meals) {
    recipesDiv.innerHTML = "<p>No food found 😢</p>";
    return;
  }

  data.meals.forEach(meal => {
    recipesDiv.innerHTML += `
      <div class="recipe-card">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3>${meal.strMeal}</h3>
        <button onclick="viewMeal('${meal.idMeal}')">View</button>
      </div>
    `;
  });
}

/* ================= VIEW FULL RECIPE ================= */
async function viewMeal(id) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const data = await res.json();
  const meal = data.meals[0];

  alert(`Ingredients and steps are available 😎`);
}

/* ================= LOGOUT ================= */
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
