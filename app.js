let modal = document.getElementById("myModal");

let btns = document.getElementsByClassName("modalBtn");

let showModal = function () {
  modal.style.display = "block";

  let x = document.getElementById("email").value;
  let defaultVal = x.defaultValue;
  let currentVal = x;

  if (defaultVal == currentVal) {
    document.getElementById("demo").innerHTML =
      "We sent a confirmation link to: default email";
  } else {
    document.getElementById("demo").innerHTML =
      "We sent a confirmation link to: " + currentVal;
  }
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", showModal, false);
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
