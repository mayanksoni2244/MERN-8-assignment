function pro() {
  const number = document.querySelector("#num").value;
  const color = document.querySelector("#color").value;
  const type = document.querySelector("#type").value;
  const cont = document.querySelector(".cont");

  cont.innerHTML = "";
  for (let i = 0; i < number; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = color;

    if (type === "circle") {
      card.style.borderRadius = "50%";
    }
    cont.appendChild(card);
  }
}
