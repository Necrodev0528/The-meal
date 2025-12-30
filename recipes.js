

const recipeContainer=document.getElementById("recipeContainer");
const bookmarks=JSON.parse(localStorage.getItem("bookmarks_"+loggedInUser.username))||[];

function displayRecipes(meals){
  recipeContainer.innerHTML="";
  meals.forEach(meal=>{
    const card=document.createElement("div");
    card.className="recipe-card";
    const bookmarked = bookmarks.find(b=>b.idMeal===meal.idMeal);
    card.innerHTML=`
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
      <p>${meal.strInstructions.substring(0,100)}...</p>
      <button class="bookmark-btn">${bookmarked?"Bookmarked":"Bookmark"}</button>
    `;
    card.querySelector(".bookmark-btn").onclick=()=>{
      let allBookmarks = JSON.parse(localStorage.getItem("bookmarks_"+loggedInUser.username)) || [];
      if(allBookmarks.find(b=>b.idMeal===meal.idMeal)){
        allBookmarks = allBookmarks.filter(b=>b.idMeal!==meal.idMeal);
        card.querySelector(".bookmark-btn").textContent="Bookmark";
      }else{
        allBookmarks.push(meal);
        card.querySelector(".bookmark-btn").textContent="Bookmarked";
      }
      localStorage.setItem("bookmarks_"+loggedInUser.username, JSON.stringify(allBookmarks));
    };
    recipeContainer.appendChild(card);
  });
}

// Initial fetch
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then(res=>res.json())
  .then(data=>{ if(data.meals) displayRecipes(data.meals); });

// Search function
function searchRecipes(){
  const query=document.getElementById("searchInput").value.trim();
  if(!query) return;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(res=>res.json())
    .then(data=>{
      if(data.meals) displayRecipes(data.meals);
      else recipeContainer.innerHTML="<p style='text-align:center;margin-top:20px;'>No recipes found</p>";
    });
}
