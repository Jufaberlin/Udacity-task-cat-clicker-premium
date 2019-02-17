const cats = [
  {
    name : "pinky",
    source : "img/01cat.jpg"
  },
  {
    name : "brain",
    source : "img/02cat.jpg"
  },
  {
    name : "bing",
    source : "img/03cat.jpg"
  },
  {
    name : "bong",
    source : "img/04cat.jpg"
  },
  {
    name : "bang",
    source : "img/05cat.jpg"
  }
];

const body = document.querySelector("body");
const image = document.querySelector("#img");
const title = document.querySelector("h1");
const countDisplay = document.querySelector("#count");
count = 0;
countDisplay.textContent = count;

function showCats() {
  for(cat of cats) {
    const catName = document.createElement("p");
    catName.textContent = cat.name;
    document.body.appendChild(catName);
    let thisCat = cat;
    catName.addEventListener("click", function(displayCat) {
      count = 0;
      image.setAttribute("src", thisCat.source);
      title.textContent = thisCat.name;
      countDisplay.textContent = count;
    });
  }
};

image.addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});

showCats();
