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
