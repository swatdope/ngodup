const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((items) =>
  items.addEventListener("click", () => {
    items.classList.toggle("collapsible--expanded");
  })
);
