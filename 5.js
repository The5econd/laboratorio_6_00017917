var aux = [];
var array5 = [1, 'hola',[1,2,3],true,4];
function fun5(array5, tipo){
    for ( let i of array5){
        if (typeof i == tipo){
            aux.push(i);
        }
    }
    console.log(aux);
}