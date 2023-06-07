const liBaru=document.createElement('li');
const teksliBaru=document.createTextNode('item baru');
liBaru.appendChild(teksliBaru);
const ul=document.querySelector('section#b ul');
const li2= ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

const link=document.getElementsByTagName('a')[0];

sectionA.removeChild(link);
