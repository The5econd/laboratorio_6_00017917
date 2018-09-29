var array4 = [1,2,3,4,5,6]
function fun4(array4){
    for(let i = 0; i < array4.length + 1; i++){
        if (array4.length % 2 != 0){
            let h = ((array4.length/2)-0.5)
            let j = array4.splice(h, 1);
            console.log(array4.shift() + array4.pop());
            
        }

        if ((array4.length) % 2 == 0 ){
            console.log(array4.shift() + array4.pop());
        }
    }
    console.log(j*2)
}