function includeHTML() {
  let z, i, element, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    element = z[i];
    file = element.getAttribute("include");
    if (file) {
      file = `components/${file}.html`;
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            element.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            element.innerHTML = "Page not found.";
          }
          element.removeAttribute("include");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
