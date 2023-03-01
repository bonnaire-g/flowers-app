const flowersData = [
  {
    name: "Rose",
    image: "https://images.unsplash.com/photo-1589274633085-0ebcd7c3da77",
  },
  {
    name: "Sunflower",
    image: "https://images.unsplash.com/photo-1544493189-7e746c962a18",
  },
  {
    name: "Lily",
    image: "https://images.unsplash.com/photo-1529528077323-4715e2d76c40",
  },
  {
    name: "Tulip",
    image: "https://images.unsplash.com/photo-1551833003-0fbc16a4417d",
  },
];

const flowersContainer = document.getElementById("flowers");

flowersData.forEach((flower) => {
  const flowerElement = document.createElement("div");
  flowerElement.classList.add("flower");
  const nameElement = document.createElement("div");
  nameElement.classList.add("flower-name");
  nameElement.textContent = flower.name;
  const imageElement = document.createElement("img");
  imageElement.classList.add("flower-image");
  imageElement.src = flower.image;
  flowerElement.appendChild(nameElement);
  flowerElement.appendChild(imageElement);
  flowersContainer.appendChild(flowerElement);
});
