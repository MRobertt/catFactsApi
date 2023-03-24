import "./styles.css";

// document.getElementById("app").innerHTML = ;
document.querySelector(".nextbtn").addEventListener("click", function (event) {
  fetch("https://catfact.ninja/fact")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector(".facts").innerHTML = data.fact;
    });
});
