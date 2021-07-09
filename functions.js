console.debug("inside functions.js")

function getInfo(name) {
    var mess = "salut " + name + " , bine ai venit!";
    console.warn("inside get info", mess);
    // return mess;
}

console.info(getInfo("nick "+ "matei"));

var myName = "nick "+ "matei";
var wellcome = getInfo(myName);
console.info(wellcome);


function showskills () {
    document.getElementById('home').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('languages').style.display='none';
    document.getElementById('skills').style.display='block';
}
function showhome () {
    document.getElementById('home').style.display='block';
    document.getElementById('skills').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('languages').style.display='none';
}
function showproject () {
    document.getElementById('home').style.display='none';
    document.getElementById('languages').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('project').style.display='block';
}
function showlanguages () {
    document.getElementById('home').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('languages').style.display='block';
}
