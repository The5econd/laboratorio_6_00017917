usuarios = [];
function fun11(NOM, APE, FECHA, NUM, CORREO){
    nombre = NOM,
    apellido = APE,
    fecha = FECHA,
    numero = NUM,
    correo = CORREO
    console.log(prompt(fun11.nombre));
    console.log(prompt(fun11.apellido));
    console.log(prompt(fun11.fecha));
    console.log(prompt(fun11.numero));
    console.log(prompt(fun11.correo));

    usuarios.push(fun11(fun11.nombre,fun11.apellido,fun11.fecha,fun11.numero,fun11.correo));
}