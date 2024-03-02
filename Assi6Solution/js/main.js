
const btnContainer = document.getElementById("btn-container");
const cardContainer = document.getElementById("card-container");
const errorElement = document.getElementById("error-element"); //4.0
const sortBtn = document.getElementById("sort-btn"); //5.0

let selectedCategory = 1000; //3.0
let sortByView = false; //5.0
sortBtn.addEventListener("click", () => {
  sortByView = true;
  fetchDataByCategories(selectedCategory, sortByView);
});

//step 2: copy the api
const fetchCategories = () => {
  const url = "https://openapi.programming-hero.com/api/videos/categories";
  fetch(url)
    .then((res) => res.json())
    .then(({ data }) => {
      data.forEach((card) => {
        const newBtn = document.createElement("button");
        newBtn.className =
          "category-btn btn  btn-ghost bg-slate-700 text-white text-lg"; //2.1
        newBtn.innerText = card.category;
        newBtn.addEventListener("click", () => {
          fetchDataByCategories(card.category_id);
          const allBtns = document.querySelectorAll(".category-btn");
          for (const btn of allBtns) {
            btn.classList.remove("bg-red-600");
          }
          newBtn.classList.add("bg-red-600");
        }); //2.2
        btnContainer.appendChild(newBtn);
      });
    });
};

//2.2 the category id from API
const fetchDataByCategories = (categoryID, sortByView) => {
  selectedCategory = categoryID;
  const url = `
    https://openapi.programming-hero.com/api/videos/category/${categoryID}
    `;
  fetch(url)
    .then((res) => res.json())
    .then(({ data }) => {
      //5.0
      if (sortByView) {
        data.sort((a, b) => {
          const totalViewsStrFirst = a.others?.views;
          const totalViewsStrSecond = b.others?.views;
          const totalViewsFirstNumber = parseFloat(
            totalViewsStrFirst.replace("K", "" || 0)
          );
          const totalViewsSecondNumber = parseFloat(
            totalViewsStrSecond.replace("K", "" || 0)
          );
          return totalViewsSecondNumber - totalViewsFirstNumber;
        });
      }
      //5.0
      //4.0
      if (data.length === 0) {
        errorElement.classList.remove("hidden");
      } else {
        errorElement.classList.add("add");
      }
      //4.0

      cardContainer.innerHTML = ""; //2.4 to clear the field, because before set the line, when clicking any button such as, all, music, without clearing previous data, updating new data, that;s why previous and new data increasing, and filling the display by previous card and new card
      //2.3
      data.forEach((video) => {
        let verifiedBadge = "";
        if (video.authors[0].verified) {
          verifiedBadge = `
                <img class="w-6 h-6" src="./images/verify.png" alt="" />
                `;
        } //3.1
        
        const newCard = document.createElement("div");
        newCard.innerHTML = `
            <div class="card w-full bg-base-100 shadow-xl">
            <figure class="overflow-hidden h-72">
                <img class="w-full" src="${video.thumbnail}" alt="Shoes" />
                <h6 class="absolute bottom-[40%] right-12">0 hr</h6>
            </figure>
            <div class="card-body">
                <div class="flex space-x-4 justify-start items-start">
                <div>
                    <img
                    class="w-12 h-12 rounded-full"
                    src="${video.authors[0].profile_picture}"
                    alt="Shoes"
                    />
                </div>
                <div>
                    <h2 class="card-title">${video.title}</h2>
                    <div class="flex mt-3">
                    <p class="">${video.authors[0].profile_name}</p>
                    ${verifiedBadge}
                    </div>
                    <p class="mt-3">1${video.others.views}</p>
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
fetchDataByCategories(selectedCategory, sortByView); //3.0
