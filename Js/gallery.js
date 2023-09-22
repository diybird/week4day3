document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".photo");
  
    galleryItems.forEach((item, index) => {
      const infoBox = document.getElementById(`infoBox_${index}`);
      const infoText = infoBox.querySelector(".info-text");
      const infoClose = infoBox.querySelector(".info-close");
  
      item.addEventListener("click", () => {
        infoText.innerHTML = descTexts[index];
        infoBox.style.visibility = "visible";
      });
  
      infoClose.addEventListener("click", () => {
        infoBox.style.visibility = "hidden";
      });
  
      infoClose.addEventListener("mouseover", () => {
        infoClose.style.color = "yellow";
      });
  
      infoClose.addEventListener("mouseout", () => {
        infoClose.style.color = "";
      });
  
      infoBox.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click event from closing the info box
      });
    });
  });