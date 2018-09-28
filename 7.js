var array7 = [14.5,17.6,15.3,16.0];
var total = 0.0;
var total2 = 0.0;
var promedio = 0.0;
function fun7(array7){
    for(let i of array7){
        total += i;
    }
    promedio = total/(array7.length);

    for(let i = 0; i < array7.length; i++){
        total2 = total2 + Math.pow( (array7[i] - promedio),2 )
        incerteza = Math.sqrt((1/(array7.length-1))*(total2))
    }
    console.log(promedio + "+-"+incerteza)
}