
function fun6(cadena){
    a = cadena.split("");
    for(let i = 0; i < a.length; i++){
        if(a.includes("m")){
            a[a.indexOf("m")] = 0;
        }
        if(a.includes("u")){
            a[a.indexOf("u")] = 1;
        }
        if(a.includes("r")){
            a[a.indexOf("r")] = 2;
        }
        if(a.includes("c")){
            a[a.indexOf("c")] = 3;
        }
        if(a.includes("i")){
            a[a.indexOf("i")] = 4;
        }
        if(a.includes("e")){
            a[a.indexOf("e")] = 5;
        }
        if(a.includes("l")){
            a[a.indexOf("l")] = 6;
        }
        if(a.includes("a")){
            a[a.indexOf("a")] = 7;
        }
        if(a.includes("g")){
            a[a.indexOf("g")] = 8;
        }
        if(a.includes("o")){
            a[a.indexOf("o")] = 9;
        }
    }
    console.log(a.join(''));
}