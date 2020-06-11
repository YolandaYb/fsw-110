
//Navbar
var links = ["ABOUT", " " , "HOME", " ", "SHOP"];

var navbar = document.createElement("NAV");

links.forEach(function (links){
    var anchorElmnt = document.createElement("A");
    anchorElmnt .setAttribute("href", "/html");
    anchorElmnt.textContent = links;
    navbar .appendChild(anchorElmnt);
});

document.body.appendChild(navbar);

//H1 tag
var newh1 = document.createElement("h1");
newh1.textContent = "H1 Tag"
document.body.appendChild(newh1)

//P tag
var newp = document.createElement("p");
newp.textContent = "P Tag"
document.body.appendChild(newp)

//List
var items = ["x", "y", "z"];

var list = document.createElement ("ol");

items.forEach(function (items){
    var li = document.createElement("li");
    li.textContent = items;
    list .appendChild(li);
});

document.body.appendChild(list);

var foot = document.createElement("FOOTER");
var text = document.createTextNode("My Footer");
foot.appendChild(text);

document.body.appendChild(foot)




