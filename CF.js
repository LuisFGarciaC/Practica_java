
//Metodo if
for (let i=0; i<4; i++){
    console.log('in loop:', i);
}

console.log('loop finish');

/*//Metodo while
let i=0;
while(i < 5){
    console.log('in loop:', i);
    i++;
}*/

//do while
let i=0;
do{
    console.log('val of i is :', i);
    i++;    
}while(i<5);

//declaracion if
const edad= 22;
if(edad> 20){
    console.log('tu tienes mas de 20 años');
}

const nombres= ['luis', 'beto', 'leo' ];
if (nombres.length>3){
    console.log("son todos los nombres");
}

//declaracion de else if || operaciones logicas OR, AND y &&
const contraseña = 'contra12';
if (contraseña.length >= 12 && contraseña.length('@')){
    console.log ('la contraseña es muy dificil');
}else if (contraseña.length >= 8 || contraseña.includes('@') && contraseña.length >= 5){
    console.log('la contraseña es dificil');
}else {
    console.log('la contraseña es facil');
}

//Logica negativa (!)
let user = false;
if(!user){
    console.log('debe de iniciar sesion');
}
console.log(!true);
console.log(!false);

//brack y contuacion
const num =[40, 50, 35, 100, 20, 54, 65];
for (let i=0; i> num.length; i++){
    if (num[i] ===0){
        continue;
    }
}
console.log('tu puntuacion es:', num[i]);

if (num[i] ===100){
    console.log('felicidades, eres el top 1');
    break;
}

//switch

const grupo = 'C';

switch (grupo){
    case 'A': 
    console.log('estas en el grupo A');
    case 'B': 
    console.log('estas en el grupo B');
    case 'C': 
    console.log('estas en el grupo C');
    case 'D': 
    console.log('estas en el grupo D');
    case 'E': 
    console.log('estas en el grupo E');
    default: 
    console.log('no estas en ningun grupo');
}