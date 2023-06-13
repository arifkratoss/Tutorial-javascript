const tubahwarna=document.getElementById('tubahwarna');
tubahwarna.onclick =function (){
    // document.body.style.backgroundColor ='lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}


const tAcakwarna =document.createElement('button');
const teksTombol =document.createTextNode('Acak warna');
tAcakwarna.appendChild(teksTombol );
tAcakwarna.setAttribute('type','button');
tubahwarna.after(tAcakwarna);
