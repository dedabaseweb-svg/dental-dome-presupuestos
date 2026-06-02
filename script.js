const dateEl = document.getElementById("date");
const flow = document.getElementById("flow");
const implants = document.getElementById("implants");
const esthetic = document.getElementById("esthetic");

dateEl.textContent = new Date().toLocaleDateString("es-ES");

function sync() {
  document.getElementById("flowOut").textContent = flow.value;
  document.getElementById("implantsOut").textContent = implants.value;
  document.getElementById("estheticOut").textContent = esthetic.value;
}

[flow, implants, esthetic].forEach(el => el.addEventListener("change", sync));
sync();

document.querySelectorAll(".work-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".work-card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
  });
});