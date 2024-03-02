// Function to fetch data from the API
const fetchData = async (query, isSearch = false) => {
  let endpoint = isSearch
    ? `https://openapi.programming-hero.com/api/ai/tools?search=${query}`
    : `https://openapi.programming-hero.com/api/ai/tool/${query}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

// Function to display technology cards
const displayTechnologyCards = (tools) => {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = "";
  tools.forEach((tool) => {
    const card = `
        <div class="card bg-base-100 shadow-lg">
          <figure class="px-10 pt-10">
            <img src="${tool.image}" alt="${tool.name}" class="rounded-xl">
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${tool.name}</h2>
            <p class="text-sm">${tool.description}</p>
            <div class="flex items-center justify-center gap-4 mt-4">
              <button class="btn btn-primary" onclick="handleShowDetail('${tool.id}')">Show Details</button>
            </div>
          </div>
        </div>
      `;
    mainContent.insertAdjacentHTML("beforeend", card);
  });
};

// Function to display tool details in the modal
const displayToolDetails = async (id) => {
  const tool = await fetchData(id);
  const modalDetails = document.getElementById("modal-details");
  modalDetails.innerHTML = `
      <h2>${tool.data.tool_name}</h2>
      <p>${tool.data.description}</p>
      <p>Website: <a href="${tool.data.website}" target="_blank">${tool.data.website}</a></p>
      <!-- Add more details as needed -->
    `;
  showModal();
};

// Function to handle form submission
const handleFormSubmit = async (event) => {
  event.preventDefault();
  const searchInput = document.getElementById("search-input").value;
  const tool = await fetchData(searchInput, true); // Pass true to indicate it's a search query
  if (tool && tool.status) {
    displayTechnologyCards(tool.data.tools);
  } else {
    alert("Tool not found!");
  }
};

// Function to show modal
const showModal = () => {
  const modal = document.getElementById("modal");
  modal.classList.add("active");
};

// Function to hide modal
const hideModal = () => {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
};

// Function to initialize the page with all technology tools
const initializePage = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/ai/tools"
  );
  const data = await response.json();
  const tools = data.data.tools;
  displayTechnologyCards(tools);
};

// Initialize the page
initializePage();
