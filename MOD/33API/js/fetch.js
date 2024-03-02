// SHow the user list
function userDataList() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((userDataList) => displayUserData(userDataList));
  }
  
  function displayUserData(users) {
    const userDataContainer = document.getElementById("user-data-container");
  
    for (const user of users) {
      const usersDiv = document.createElement("div");
      usersDiv.classList.add("user");
      usersDiv.innerHTML = `
      <h3>User-${user.id}</h3>
      <h4>Name: ${user.name}</h4>
      <p>Email:${user.email}</p>
      <p>Address:${user.address.city}</p>
      `; //    <p>Address: ${JSON.stringify(user.address)}</p>
      userDataContainer.appendChild(usersDiv);
    }
  }
  userDataList();
  //End SHow the user list------------------------------------------------

  function photoData() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((photoData) => displayPhotoData(photoData));
}

function displayPhotoData(photoData) {
  const ul = document.getElementById("photo-list");
  for (const photo of photoData) {
    const li = document.createElement("li");
    li.innerText = `Id- ${photo.id} & ${photo.title} & ${photo.url}`;
    ul.appendChild(li);
  }
}

//post data-----------------------------------------------------
function postData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((postData) => displayPostData(postData));
}

function displayPostData(posts) {
  const postContainer = document.getElementById("post-container");
  //1. get the container element where you want to add the new elements
  //2. Create CHild element
  //3. Set innerText or innerHTML
  //4. Do appendChild the innerText or innerHTML
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
    <h3>Post Id: ${post.id}</h3>
    <h4>Post Title: ${post.title}</h4>
    <p>Post Description:${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
  }
}
postData();

