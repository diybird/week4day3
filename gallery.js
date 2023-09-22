// JavaScript for generating the gallery
const gallery = document.getElementById("gallery");
const modal = document.createElement("div");
modal.className = "modal";
document.body.appendChild(modal);

// Arrays of caption and description texts
const captionTexts = [
  "Floppy",
  "Binky",
  "Whiskers",
  "Hopper",
  "Cottontail",
  "Snickers",
  "Thumper",
  "Nibbles",
  "Bugsy",
  "Fluffy",
];

const descTexts = [
  "A cute brown rabbit.",
  "A lovely gray bunny.",
  "A friendly gray rabbit.",
  "An energetic gray bunny.",
  "A fluffy brown bunny.",
  "A playful white rabbit.",
  "An adorable white bunny.",
  "A mischievous gray rabbit.",
  "A sweet brown bunny.",
  "A fluffy white rabbit.",
];

// Create a new ul element for the gallery
const ul = document.createElement("ul");
ul.className = "gallery-list";

// Loop to generate gallery images
for (let i = 0; i < captionTexts.length; i++) {
  const listItem = createGalleryItem(i);
  ul.appendChild(listItem);

  // Start a new row every 3 images
  if ((i + 1) % 3 === 0) {
    ul.appendChild(document.createElement("br")); // Add a line break after every 3 images
  }
}

gallery.appendChild(ul);

// Function to create a gallery item (li)
function createGalleryItem(index) {
  const listItem = document.createElement("li");
  listItem.className = "photo";

  const image = document.createElement("img");
  image.src = `images/Rabbit_${index + 1}.jpg`;
  image.alt = `Rabbit ${index + 1}`;
  image.width = 300; // Set the width to 300 pixels (can adjust this if needed)
  image.height = 300; // Set the height to 300 pixels (can adjust this if needed)

  // Open modal on image click
  image.addEventListener("click", () => openModal(index));

  const caption = document.createElement("div");
  caption.innerHTML = `<span class='caption'>${captionTexts[index]}</span>`;

  const description = document.createElement("div");
  description.innerHTML = `<span class='description'>${descTexts[index]}</span>`;
  description.className = "description";

  listItem.appendChild(image);
  listItem.appendChild(caption);
  listItem.appendChild(description);

  return listItem;
}

// Function to open the modal
function openModal(index) {
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <img src="images/Rabbit_${index + 1}.jpg" alt="Rabbit ${index + 1}" width="600" height="400">
      <div class="modal-caption">${captionTexts[index]}</div>
      <div class="modal-description">${descTexts[index]}</div>
    </div>
  `;
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
