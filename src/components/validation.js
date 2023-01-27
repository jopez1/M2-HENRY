const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^[a-z0-9_-]{6,10}$/
// referencia: https://code.tutsplus.com/es/tutorials/8-regular-expressions-you-should-know--net-6149

 export function validation(userData){
    let errors = {};
 if(!regexEmail.test(userData.username)) errors.username = "Debe ser un email valido";
 else if(!userData.username) errors.username = "Ingresa tu usario"
 else if(userData.username.length > 35) errors.username = "No puede tener mas de 35 caracteres"

 if(!regexPassword.test(userData.password)) errors.password = "Debe tener por lo menos un numero";
 else if(!userData.password.length > 15 && !userData.password.length < 11) errors.password = "Debe ser entre 6 y 10 caracteres"
 
 return errors;
}