function hidepage (id) {
    console.info('hide page', id);
    document.getElementById(id).style.display='none'; 
}

function showpage(id){
    console.info('show page', id);
    document.getElementById(id).style.display='block';
}

function showhome () {
    hidepage('skills');
    hidepage('project');
    hidepage('languages');
    showpage('home');
}

function showskills () {
    hidepage('home');
    hidepage('project');
    hidepage('languages');
    showpage('skills');
}

function showproject () {
    hidepage('home');
    hidepage('skills');
    hidepage('languages');
    showpage('project')
}
function showlanguages () {
    hidepage('home')
    hidepage('skills')
    hidepage('project')
    showpage('languages')
}
