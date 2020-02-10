var inputdiameter;
var omtrekcirkel;

function submit() {
    inputdiameter = document.getElementById('diameter').value;
    omtrekcirkel = inputdiameter * Math.PI;
    document.getElementById("show").innerHTML = omtrekcirkel;
}
