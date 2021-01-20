const links= new Array("week01","week02","week03","week04","week05","week06","week07","week08","week09","week10","week11","week12","week13","week14");

const ol = document.querySelector('ol');
const arrayLength = links.length;

links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = link.toUpperCase();
    ol.appendChild(li);
    li.appendChild(a);
    li.style.listStyle = "none";
    li.classList.add("main_links" , "wk_links");
    a.href=   link +'.html';

 
});
