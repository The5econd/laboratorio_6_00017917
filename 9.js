var array9 = [];
function fun9(adivinar){
    for(let i = 0; i < 20; i++){
        array9.push(Math.floor(Math.random() * 20));
    }
    if(array9.includes(adivinar)){
        console.log('ADIVINOOOOOOOOOOOO');
    }
    else{
        console.log('MANCOOOOOOOOOOOO')
    }
}