const body = document.getElementById("body");

const button = document.getElementsByClassName("button");
for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", darkMode);
}

function darkMode() {
    console.log(body.style.background)
    if (body.style.background === "rgba(0, 0, 0, 0.8)") {
        body.style.background = "rgba(37, 204, 182, 0.158)";
        body.style.color = "black";
        
        
    } 
    else { body.style.background = "rgba(0,0,0,.8)";
    body.style.color = "white";
    }
}

