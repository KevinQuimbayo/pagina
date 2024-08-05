function validateForm() {
    let usuario = document.getElementById('usuario').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmarPassword = document.getElementById('confirmarPassword').value;

    let mensajeError = 'verifica los campos';
    let mensajeError2 = 'la contraseña debe tener minimo 8 caracteres';
    let mensajeError3 = 'la contraseña no son iguales';
    let mensajeError4 = 'no admite solo numeros';
    let mensajeExito = '¡Gracias por registrarte!';
    let mensaje = document.getElementById('mensaje');
    let mensaje2 = document.getElementById('mensaje2');
    let mensaje3 = document.getElementById('mensaje3');
    let mensaje4 = document.getElementById('mensaje2');

    if (!usuario || !email || !password || !confirmarPassword) {
        mensaje.textContent = mensajeError;
        return false;
    }

    if (!validateEmail(email)) {
        mensaje.textContent = mensajeError;
        return false;
    }

    if (password.length < 8) {
        mensaje2.textContent = mensajeError2;
        return false;
    }

    if (password !== confirmarPassword) {
        mensaje3.textContent = mensajeError3;
        return false;
    }
    
    if (!/^(?=.*[A-Za-z])[A-Za-z0-9]{8,}$/.test(password)) {
        mensaje4.textContent = mensajeError4
        return false;
    }

    mensaje.textContent = mensajeExito;
    alert('registro exitoso')
    return true;
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
