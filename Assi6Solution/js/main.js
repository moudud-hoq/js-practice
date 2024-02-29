//Step 1:
const btnContainer = document.getElementById("btn-container");

//step 2: copy the api
const fetchCategories = () => {
  const url = "https://openapi.programming-hero.com/api/videos/categories";
  fetch(url)
    .then((res) => res.json())
    .then(({ data }) => {
      data.forEach((card) => {
        const newBtn = document.createElement("button");
        newBtn.className = "btn  btn-ghost bg-slate-700 text-white text-lg";//2.1
        newBtn.innerText = card.category;
        btnContainer.appendChild(newBtn);
      });
    });
};

fetchCategories();
