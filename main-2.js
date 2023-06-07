
// document.getElementsById()->element
const judul=document.getElementById('judul');
judul.style.color='blue'
judul.style.backgroundColor='black'
judul.innerHTML='ariefkratoss'
// document.getElementsByTagName()->HTMLCollectios
const p=document.getElementsByTagName('p');
for (let    i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
  }
  const h1 =document.getElementsByTagName ('h1')[0]
  h1.style.fontSize ='50px';
//   document.getElementsByName()->HTMLCollection
const p1 =document.getElementsByClassName('p1')[0]
p1.innerHTML ='ini di ubah dari js'

