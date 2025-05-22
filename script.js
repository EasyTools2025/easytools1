function copyText(index) {
  const inputs = document.querySelectorAll("input");
  inputs[index].select();
  document.execCommand("copy");
}

function get2FACode() {
  fetch("/api/get-2fa")
    .then((res) => res.text())
    .then((code) => {
      document.getElementById("code-output").textContent = code;
    })
    .catch((err) => {
      document.getElementById("code-output").textContent = "Error: " + err.message;
    });
}
