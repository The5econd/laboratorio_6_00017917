var usuarios = [];
function agregar(){
        let nombre = prompt('nombre');
        let apellido = prompt('apellido');
        let fecha = prompt('fecha');
        let numero = prompt('numero');
        correo = prompt('correo');
        usuarios.push({nombre, apellido, fecha, numero, correo});
        console.log('usuario agregado satisfactoriamente')
}
function buscar(){
    if(usuarios === undefined || usuarios.length == 0){
        console.log('la lista esta vacia, no puede buscar nada')
    }
    else{
        let flag = 1;
        let nombre = prompt('ingrese nombre que desea buscar');
        for (let i = 0; i < usuarios.length; i++){
            if(usuarios[i].nombre == nombre){
                console.log('aca esta el resultado de la busqueda: ' + 
                                '  nombre: '+ usuarios[i].nombre +
                                '  apellido: '+ usuarios[i].apellido +
                                '  fecha: '+ usuarios[i].fecha +
                                '  numero: '+ usuarios[i].numero +
                                '  correo: '+ usuarios[i].correo);
                flag = flag +1;

            }
        }
        if (flag == 1){
            console.log('no se econtro el nombre deseado')
        }
    }
    
}
function modificar(){
    if(usuarios === undefined || usuarios.length == 0){
        console.log('la lista esta vacia, no puede modificar nada')
    }
    else{
        let flag = 1;
        let nombre = prompt('ingrese nombre del usuario que desea modificar: ');
        for (let i = 0; i < usuarios.length; i++){
            if (usuarios[i].nombre == nombre){
                let nomMOD = prompt('ingrese el nombre nuevo: ');
                let apeMOD = prompt('ingrese el apellido nuevo: ');
                let fechaMOD = prompt('ingrese la fecha nueva: ');
                let numMOD = prompt('ingrese el numero nuevo: ');
                let corrMOD = prompt('ingrese el correo nuevo');
                usuarios[i].nombre = nomMOD;
                usuarios[i].apellido = apeMOD;
                usuarios[i].fecha = fechaMOD;
                usuarios[i].numero = numMOD;
                usuarios[i].correo = corrMOD;
                flag = flag + 1;
            }
        }
        if (flag == 1){
            console.log('no se econtro el nombre deseado')
        }
        else{
            console.log('usuario modificado satisfactoriamente')
        }
    }
}
function eliminar(){
    if(usuarios === undefined || usuarios.length == 0){
        console.log('la lista esta vacia por lo tanto no puede eliminar nada')
    }
    else{
        let flag = 1;
        let nombre = prompt('ingres el nombre del usuario que desea eliminar');
        for(let i = 0; i < usuarios.length; i++){
            if (usuarios[i].nombre == nombre){
                usuarios.splice(i, 1);
                console.log('usuario eliminado satisfactoriamente')
                flag = flag + 1;
            }
        }
        if (flag == 1){
            console.log('no se econtro el nombre deseado')
        }
    }
}
function mostrar(){
    if (usuarios === undefined || usuarios.length == 0) {
        console.log('la lista esta vacia, no hay nada que mostrar')
    }
    else{
        console.log('estos son todos los usuarios registrados')
        for(let i = 0; i < usuarios.length; i++){
            console.log("nombre: " + usuarios[i].nombre + 
                        "   apellido: " + usuarios[i].apellido + 
                        "   fecha de naciemiento: " + usuarios[i].fecha + 
                        "   numero: " + usuarios[i].numero + 
                        "   correo: " + usuarios[i].correo)
        }
    }
}
function menu(){
    n = true;
    while(n){
        console.log('////////////////MENU//////////////')
        console.log('Agregar: presione 1');
        console.log('buscar: presione 2');
        console.log('Modificar: presione 3');
        console.log('Eliminar: presione 4');
        console.log('Mostrar todo: presione 5');
        console.log('Salir: presione 6');
        switch(prompt('ELIGA UN NUMERO DEL MENU MOSTRADO')){
            case "1":
                agregar();
                break;
            case "2":
                buscar();
                break;
            case "3":
                modificar();
                break;
            case "4":
                eliminar();
                break;
            case "5":
                mostrar();
                break;
            case "6":
                n = false;
                break;
            default:
                console.log('por favor ingrese un numero valido');
        }
    }
}