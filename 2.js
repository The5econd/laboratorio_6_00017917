function fun2(array2){
    for(let i of array2){
        cont += i;
    }
    promedio = cont/array2.length;
    console.log(`la suma de los numeros del arreglo es:  ${cont}, y su promedio es ${promedio}`)
}