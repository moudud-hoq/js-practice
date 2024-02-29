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
        newBtn.className = "btn  btn-ghost bg-slate-700 text-white text-lg"; //2.1
        newBtn.innerText = card.category;
        newBtn.addEventListener("click", () =>
          fetchDataByCategories(card.category_id)
        ); //2.2
        btnContainer.appendChild(newBtn);
      });
    });
};

//2.2 the category id from API
const cardContainer = document.getElementById("card-container");
const fetchDataByCategories = (categoryID) => {
  const url = `
  https://openapi.programming-hero.com/api/videos/category/${categoryID}
  `;
  fetch(url)
    .then((res) => res.json())
    .then(({ data }) => {
      cardContainer.innerHTML = ""; //2.4 to clear the field, because before set the line, when clicking any button such as, all, music, without clearing previous data, updating new data, that;s why previous and new data increasing, and filling the display by previous card and new card
      //2.3
      data.forEach((video) => {
        const newCard = document.createElement("div");
        newCard.innerHTML = `
        <div class="card w-full bg-base-100 shadow-xl">
          <figure class="overflow-hidden h-72">
            <img class="w-full" src="./images/smells.jpg" alt="Shoes" />
            <h6 class="absolute bottom-[40%] right-12">0 hr</h6>
          </figure>
          <div class="card-body">
            <div class="flex space-x-4 justify-start items-start">
              <div>
                <img
                  class="w-12 h-12 rounded-full"
                  src="./images/smells.jpg"
                  alt="Shoes"
                />
              </div>
              <div>
                <h2 class="card-title">Laugh At My Pain</h2>
                <div class="flex mt-3">
                  <p class="">Author Name</p>
                  <img class="w-6 h-6" src="./images/verify.png" alt="" />
                </div>
                <p class="mt-3">100k Views</p>
              </div>
            </div>
          </div>
        </div>
        `;
        cardContainer.appendChild(newCard);
      });
    });
};

fetchCategories();

