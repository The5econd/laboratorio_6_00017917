function fun1(n, array){
    for(let i of array){
        if (i == n){
            cont += 1;
        }
    }
    return cont;
}



var array4 = [1,2,3,4,5,6]
function fun4(array4){
    for(let i = 0; i < array4.length; i++){
        if ((array4.length) % 2 == 0 ){
            console.log(array4.shift(i) + array4.pop(i));
        }
        else{
            console.log(array4.shift(i) + array4.pop(i));
        }
    }
}