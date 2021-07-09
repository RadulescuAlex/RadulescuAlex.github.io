function hidepage (id) {
    console.info('hide page', id);
    document.getElementById(id).style.display='none'; 
}

function showhome () {
    hidepage('skills');
    hidepage('project');
    hidepage('languages');
    document.getElementById('home').style.display='block';
}

function showskills () {
    hidepage('home');
    hidepage('project');
    hidepage('languages');
    document.getElementById('skills').style.display='block';
}

function showproject () {
    hidepage('home');
    hidepage('skills');
    hidepage('languages');
    document.getElementById('project').style.display='block';
}
function showlanguages () {
    hidepage('home')
    hidepage('skills')
    hidepage('project')
    document.getElementById('languages').style.display= 'block';
}
