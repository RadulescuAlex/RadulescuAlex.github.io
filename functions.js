function showhome () {
    document.getElementById('languages').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('home').style.display='block';
}

function showskills () {
    document.getElementById('home').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('languages').style.display='none';
    document.getElementById('skills').style.display='block';
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
