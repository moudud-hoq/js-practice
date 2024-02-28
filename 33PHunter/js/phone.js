//data load using async await
const dataLoad = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phonesData = data.data;
  console.log(phonesData);
};
