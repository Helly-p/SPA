// XHR Request Function
async function loadXMLDoc(route) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(xhttp.responseText);
      for (const key in data) {
        if (route == key) {
          loadHTML(data[key]);
          // alert(file);
        }
      }
      window.history.pushState({}, "", route);
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}

// Fetch HTML Document
async function loadHTML(filepath) {
  const box = document.getElementById("box");
  const file = await fetch(filepath)
    .then((res) => res.text())
    .then((html) => {
        box.innerHTML = html;
      }
    );  
}
