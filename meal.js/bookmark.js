function bookmark(id) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push(id);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  alert("Bookmarked!");
}
