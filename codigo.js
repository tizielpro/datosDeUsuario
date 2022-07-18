
let usuarios = [{
    nombreUsuario:"",
    edad:null,
    idioma:"",
}];

let changeRace = confirm("¿¿¿quieres iniciar sesión???");

if(changeRace == true){
    let idiomaUsuario = prompt("¿En qué idiomas hablas?")
    let nombreUsuario = prompt("¿como quieres que te llamen? nombre de usuario")
    let edadUsuario = prompt("¿cuántos años tienes?")

    let caracteristicas = usuarios.map(usuario => (`<b style="color:#fff">nombre:</b> <b style="color:#0f0;">${usuario.nombreUsuario = nombreUsuario}</b><br><b style="color:#fff">edad:</b> <b style="color:#0f0">${usuario.edad = edadUsuario} años</b><br><b style="color:#fff">idioma:</b> <b style="color:#0f0">${usuario.idioma = idiomaUsuario}</b><br><br>`));

    var usuario = `<b style="color:#fff">Datos de usuario:</b><br>${caracteristicas}`;//los datos del usuario quedan guardados en una variable
    document.write(usuario);
}else{
    let caracteristicas = usuarios.map(usuario => (`<b style="color:#fff">nombre:</b> <b style="color: red">${usuario.nombreUsuario = "unanimed"}</b><br><b style="color:#fff">edad:<b> <b style="color: red">${usuario.edad = "undefined"}</b><br><b style="color:#fff">idioma:<b> <b style="color:red">${usuario.idioma = "undefined"}</b><br><br>`));
    let usuario = `<b style="color:#fff">Datos de usuario:</b><br>${caracteristicas}`
    document.write(usuario);
}

