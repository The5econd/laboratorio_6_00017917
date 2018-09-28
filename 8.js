var a = [[1,2],[1,2]]
var b = [[3,4],[3,4]]
var c = [];
function fun8(a,b){
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 2; j++){
            c.push(a[i][j] + b[i][j]);
        }
    }
    console.log(c);
}
