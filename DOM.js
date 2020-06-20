//const para = document.querySelector('body > h1');

//console.log(para);

const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');
console.log(errors);

//get an element by Id
const title = document.getElementById('page-title');
console.log(title);
//get elements by their class name
const errors2 = document.getElementsByClassName('error');
console.log(errors2);
//get elements by their tag name
const paras2 = document.getElementsByTagName('p');
console.log(paras2);
// 3cera parte del video
const para2 = document.querySelector('p');
console.log(para2.innerText);
//----------------------------
const paras3 = document.querySelectorAll('p');
paras3.forEach(para2 => {
 console.log(para2.innerText);
 para2.innerText += ' new text';
});

const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = '<h2>THIS IS A NEW H2 </h2>';

//-------------------

const MyCats = ['Juan','Blanco','koko'];
MyCats.forEach(person =>{
content.innerHTML += '<p>$(person)</p>';
});
//--------------

const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href','https://www.Patos.co.uk');
link.innerText = 'Sitio Web de Pancho';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style','color: green;');
//---------------------------



