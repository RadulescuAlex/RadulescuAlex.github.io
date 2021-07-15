function hide(id) {
    console.info('hide page', id);
    document.getElementById(id).style.display='none'; 
}

function highlight(el) {
    el.style.borderColor = '#00ff00';
    setTimeout(function () {
        el.style.borderColor = '#55df44';
    }, 100);
    setTimeout(function () {
        el.style.borderColor = '#99df88';
    }, 200);
    setTimeout(function () {
        el.style.borderColor = '';
    }, 300);
}

function show(id){
    var page = document.getElementById(id);
    if (page) {
        page.style.display='block';
        highlight(page)
    } else {
    console.warn('pagina cu id-ul % nu exista', id);
    }
    var oldlink = document.querySelector('a[data-page].active');
    if(oldlink){
    oldlink.classList.remove('active');
    }
    var link = document.querySelector(`a[data-page=${id}]`);
    link.classList.add("active");
}

function hideAllPages() {
    var pages = Array.from(document.getElementsByClassName('page'));
    pages.forEach(function(page){
        hide(page.id);
    });
}

function showPage(id) {
    hideAllPages();
    show(id);
}

show('skills');

document.querySelector('#top-menu-bar').addEventListener('click', function(e){
    if(e.target.matches('a')) {
        var id = e.target.getAttribute('data-page');
        showPage(id);
        highlight(e.target);
    
    }     
})

var skills = [];

function showSkills(skills){
    var skillsHtml = skills.map(function(skill){
        var favorit = skill.favorit ? 'class= favorit' : '';
        var endorsements = skill.endorsements > 5 ? `<span>${skill.endorsements}</span>` : '';
        return `<li ${favorit}>${skill.name} ${endorsements}</li>`;
    }).join('');
    
    document.querySelector("#skills ul").innerHTML = skillsHtml;
}

fetch("data/skills.json").then(function(response) {
    return response.json();
}).then(function(skills){
    window.skills = skills;
    showSkills(skills);
})
