var newh1 = document.createElement("h1")
newh1.textContent = "Welcome to my JS site"
document.body.appendChild(newh1)

var newp = document.createElement("p")
newp.textContent = "All of this was created with Javascript"
document.body.appendChild(newp)


var ol = document.createElement ("ol")
var newli = document.createElement("li")
newli.textContent = ["a", "b", "c"]
ol.appendChild(newli)
document.body.appendChild(ol)