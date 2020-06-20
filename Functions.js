function greet(){
    console.log('hello there');
}

const Mensaje = function(){
    console.log('good day!')
};


const hablar = function(nom='Karen', tiempo='dias'){
    console.log(`buenos ${tiempo} ${nom}`)
};
hablar();
hablar('Luis', 'Tardes');
//--------------------------------------------------------------------------------------------

const calcular = function(radio){
let  area1 = 3.14 * radio**2;
return area1;
}
const area1 = calcular(5);
console.log('El area es', area1);
//-------------------------------------------------------------------------------------------

const calcular1 = (radio) =>{
return 3.14 * radio**2;
}
const area2 = calcular1(5);
console.log('El area es', area2);
//-------------------------------------------------------------------------------------------

const calcular2 = radio=> 3.14 * radio**2;

const area3 = calcular2(5);
console.log('El area es', area3);
//-------------------------------------------------------------------------------------------

const menssaje = () => 'hola mundo';
const resultado = menssaje();
console.log(resultado);
//--------------------------------------------------------------------------------------------

const cuenta =(producto, tax)=>{
    let total =0;
    for(let i=0; i<producto.length; i++){
        total +=producto[i]+producto[i]*tax;
    }
    return total;
};

console.log(cuenta([10,15,30],0.2));
//---------------------------------------------------------------------------------------------
const nombre= 'Jesus';
const saludo =()=>'Hola';

let resultadouno= saludo();
console.log(resultadouno);

let resultadodos = nombre.toUpperCase();
console.log(resultadodos);

//------------------------------------------------------------------------------------------------

const miFun = (RegresaFun)=>{
    let value = 50;
    RegresaFun(value);
};

miFun(value=>{
    console.log(value);
});
//-------------------------------------------------------------------------------------------------

let personas =['Jose', 'Pedro', 'Carlos', 'Enrique', 'Sam'];
const logPerso = (person, index)=>{
    console.log (`${index}- hola ${person}`);
};

personas.forEach(logPerso);
//-------------------------------------------------------------------------------------------------

