function fetchData(callback) {
  setTimeout(() => {
    const data = "Some asynchronous data";
    callback(data);
  }, 2000); // Simulating a delay of 2 seconds
}

console.log("Before fetching data");

fetchData((data) => {
  console.log("Data fetched:", data);
});

console.log("After fetching data");

//Example 2: Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some asynchronous data";
      resolve(data);
    }, 2000); // Simulating a delay of 2 seconds
  });
}

console.log("Before fetching data");

fetchData()
  .then((data) => {
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

console.log("After fetching data");
