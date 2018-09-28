var aux = [];
var aux2 = [];
function fun3(array3){
    for (let i of array3){
        if(aux.includes(typeof i)){
            aux2[aux.indexOf(typeof i)] += 1;
        }
        else{
            aux.push(typeof i);
            aux2.push(1);
        }
    }
    for(let i = 0; i < aux.length; i++){
        console.log(aux[i]+" " + aux2[i]);
    }
    
}