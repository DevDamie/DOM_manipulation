function rainbowButton() {
  let changeButtonColor = document.getElementById("changeButtonColor");
  changeButtonColor.style.backgroundColor = "yellow";
  mainHeading.style.color = "purple";
  myName.style.color = "green";
  myName.style.backgroundColor = "pink";
}
changeButtonColor.addEventListener("click", rainbowButton);
