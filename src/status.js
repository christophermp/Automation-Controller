function updateIndicator() {
  let indicator = document.getElementById("indicator");
  indicator.className = navigator.onLine
    ? "badge badge-pill badge-success"
    : "badge badge-pill badge-danger";
  indicator.textContent = navigator.onLine ? "online" : "offline";
}
