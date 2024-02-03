const today = new Date();
console.log(today);

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
     console.log(i);
  }, 100);
}  
console.log(setTimeout);