function loadXMLDoc(route){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(xhttp.responseText);
        let flag = 0;
        for (const key in data) {
            if (route == key) {
                document.getElementById("title").innerHTML =
                data[key];
                flag = 1;
            }
        }
        if(flag == 0){
            document.getElementById("title").innerHTML =
            "Error";
        }
        window.history.pushState({}, '', route)
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}