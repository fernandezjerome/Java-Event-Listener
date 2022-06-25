const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", (e) => {
  console.log("Grandparent");
});

parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent");
  },
  { once: true }
);

grandparent.addEventListener("click", (e) => {
  console.log("child");
});
