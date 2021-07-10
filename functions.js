function hidepage (id) {
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
        el.style.borderColor = '#e0dfdc';
    }, 300);
}

function showpage(id){
    console.info('show page', id);
    var page = document.getElementById(id);
    console.info('show', page);
    if (page) {
        page.style.display='block';
        highlight(page)
    } else {
    console.warn('pagina cu id-ul % nu exista', id);
    }

}

function hideAllPages(){
    var pageIds = [
        'home', 'skills', 'project', 'languages'
    ];
    var i = 0;

    
    while(i < pageIds. length) {
        console.info('i =', i)
        // hidepage(pageIds[i++]);
        hidepage(pageIds[i]);
        i++; 
    }
}

function showhome () {
    hideAllPages();
    showpage('home');
}

function showskills () {
    hideAllPages();
    showpage('skills');
}

function showproject () {
    hideAllPages();
    showpage('project')
}
function showlanguages () {
    hideAllPages();
    showpage('languages')
}

showskills();