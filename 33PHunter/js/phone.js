//data load using async await
const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(`
  https://openapi.programming-hero.com/api/phones?search=${searchText}
  `);
  const data = await res.json();
  const phonesData = data.data;

  displayPhones(phonesData, isShowAll);
};

// show data in UI
const displayPhones = (phones, isShowAll) => {
  //Step:1 Where we will set the div?
  const phoneContainer = document.getElementById("phone-container");
  //When we will search then previous data will clear:
  phoneContainer.textContent = "";

  //Step- 5.1 Display show all button if there are more than 12 phones/products
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  //   Step- 5> display only first 12 phones, if not show all
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  //------------------------------------------------------------------
  phones.forEach((phone) => {
    //Step:2.0 Create a div
    const phoneCard = document.createElement("div");
    //2.1 Set all class which was in the phoneCard div
    phoneCard.classList = `card bg-base-100 shadow-lg`;
    //Step: 3.0 Set innerText/Html
    phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
    <img
      src="${phone.image}"
      alt="Phone"
      class="rounded-xl"
    />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p class="text-sm">Brand: ${phone.brand}</p>

<div class="flex items-center gap-8">
<div class="card-actions">
<button class="btn btn-primary">Add To Cart</button>
</div>
<div class="card-actions">
<button class="btn btn-primary">Buy Now</button>
</div>
</div>
  </div>
    `;
    //Step:4 Do appendChild
    phoneContainer.appendChild(phoneCard);
  });
  //Step:6-2:-hide loading spinner
  startToggleLoadingSpinner(false);
};
//--------------------------------------------------------------

// Handle Search Button
const handleSearch = (isShowAll) => {
  // step:6.1> function to show loader
  startToggleLoadingSpinner(true);
  //Handle Search Button
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhone(searchText, isShowAll);
};

// step:6> function to show loader
const startToggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

// Step 7: Handle Show All Button
let showAllClickCount = 0;

// Step 7: Handle Show All Button
const handleShowAll = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;

  // Increment the click count
  showAllClickCount++;

  // Call loadPhone with isShowAll set to true
  loadPhone(searchText, true);

  // If the button has been clicked for the second time, hide it and display a message
  if (showAllClickCount === 2) {
    hideShowAllButton();
    displayProductsReachedMessage();
  }
};

// Step 8: Function to display a message when all products have been reached
const displayProductsReachedMessage = () => {
  const messageContainer = document.getElementById("show-all-container");
  messageContainer.innerHTML = "Products reached out.";
};

// Step 8: Function to hide the "Show All" button
const hideShowAllButton = () => {
  const showAllContainer = document.getElementById("show-all-container");
  showAllContainer.classList.add("hidden");
};
