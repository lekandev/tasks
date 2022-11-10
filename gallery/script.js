let prev = document.querySelector(".previous");
let next = document.querySelector(".next");
let imageContainer = document.querySelector(".gallery__img");

let images = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.png",
  "img/img4.png",
  "img/img5.jpg",
  "img/img6.jpg",
];

let i = 0;

function prevImg() {
  let isFirst = i === 0;
  i = isFirst ? images.length - 1 : i - 1;
}

function nextImg() {
  let isLast = i === images.length - 1;
  i = isLast ? 0 : i + 1;
}

function displayBlock() {
  next.style.display = "block";
  prev.style.display = "block";
}

function displayNone() {
  next.style.display = "none";
  prev.style.display = "none";
}

prev.addEventListener("click", () => {
  prevImg();
  imageContainer.innerHTML = `<img src=${images[i]} alt="gallery" class="gallery__image" />`;
});
prev.addEventListener("mouseover", () => {
  displayBlock();
});

next.addEventListener("click", () => {
  nextImg();
  imageContainer.innerHTML = `<img src=${images[i]} alt="gallery" class="gallery__image" />`;
});
next.addEventListener("mouseover", () => {
  displayBlock();
});

imageContainer.innerHTML = `<img src=${images[i]} alt="gallery" class="gallery__image" />`;

imageContainer.addEventListener("mouseover", () => {
  displayBlock();
});

imageContainer.addEventListener("mouseout", () => {
  displayNone();
});
