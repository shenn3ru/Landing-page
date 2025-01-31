// Pet information data
const petInfo = {
    "Buddy": "Buddy is a friendly golden retriever who loves belly rubs and playing fetch!",
    "Max": "Max is a curious tabby cat with a playful spirit. He enjoys laser pointers and warm naps.",
    "Whiskers": "Whiskers is a gentle rabbit who loves fresh carrots and enjoys cuddles.",
    "Rex": "Rex is a loyal German shepherd who is protective, smart, and loves outdoor adventures."
  };
  
  // Create a popup for displaying pet info
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.width = "80%";
  popup.style.maxWidth = "400px";
  popup.style.padding = "20px";
  popup.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  popup.style.borderRadius = "10px";
  popup.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
  popup.style.zIndex = "1000";
  popup.style.display = "none";
  popup.style.textAlign = "center";
  popup.style.color = "#333";
  popup.style.fontSize = "1.2rem";
  document.body.appendChild(popup);
  
  // Close button for popup
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.marginTop = "10px";
  closeButton.style.padding = "5px 10px";
  closeButton.style.backgroundColor = "rgb(98, 161, 255)";
  closeButton.style.color = "#fff";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";
  closeButton.style.cursor = "pointer";
  popup.appendChild(closeButton);
  
  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });
  
  // Add event listeners to each pet image
  document.querySelectorAll(".pet-card img").forEach((img) => {
    img.addEventListener("click", () => {
      const petName = img.nextElementSibling.textContent.trim(); // Get pet name from <p> tag
      const info = petInfo[petName] || "No additional info available for this pet.";
      popup.textContent = info; // Display pet info in popup
      popup.appendChild(closeButton); // Re-attach close button
      popup.style.display = "block";
    });
  });
  