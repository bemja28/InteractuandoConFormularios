console.log('validaciones activadas');

window.addEventListener('load', function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

document.getElementById('title').focus();

exprecionReg={
    isNumber : /[0-9]/
}

const capId = (element) => document.getElementById(element);

const msgError= (element, msg, target) =>{
    capId(element).innerText = msg;
    target.classList.add('is-invalid')
}
const valified = (element, target)=>{
    capId(element).innerText = null;
            target.classList.remove('is-invalid');
            target.classList.add('is-valid')
}

document.getElementById('title').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
        msgError('errorTitle','El nombre es obligatorio',target)
            break;
        case this.value.trim().length < 2:
            msgError('errorTitle','El nombre debe tener como minimo 2 caracteres',target)
            break;
        default:
            valified('errorTitle', target)
            break;
    }
})

document.getElementById('rating').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            msgError('errorRating','El rating es obligatorio',target)
        break;
        case (this.value <= 0 || this.value > 10.0):
            msgError('errorRating','Debe ser un numero entre el 1 al 10',target)
        break;
        case (isNaN(this.value)):
            msgError('errorRating','Solo numeros',target)
                break;
        default:
            valified('errorRating', target)
        break;
    }
})


document.getElementById('awards').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            msgError('errorAwards','El awards es obligatorio',target)
            break;
            case (isNaN(this.value)):
                msgError('errorAwards','Solo numeros',target)
                break;

        default:
            valified('errorAwards', target)
            break;
    }
})

document.getElementById('release_date').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            msgError('errorFecha','La fecha es obligatoria',target)
            break;
        default:
            valified('errorFecha', target)
            break;
    }
})


document.getElementById('length').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            msgError('errorLength','la duracion es obligatoria',target)
        break;
        case (this.value < 60 || this.value > 320.0):
            msgError('errorLength','Debe ser un numero entre el 60 al 320',target)
        break;
        case (isNaN(this.value)):
            msgError('errorLength','Solo numeros',target)
            break;

        default:
            valified('errorLength', target)
        break;
    }
})




document.getElementById('genre_id').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            msgError('errorGenre','selecciona un genero',target)
        break;

        default:
            valified('errorGenre', target)
        break;
    }
})
    


document.getElementById('formPelicula').addEventListener('submit', function (e) {

    e.preventDefault();

        const elements = this.elements;
        let error = false;

        for (let i = 0; i < elements.length - 1; i++) {
            
            if (!elements[i].value.trim()|| elements[i].classList.contains('is-invalid')) {
                elements[i].classList.add('is-invalid')
                console.log('todos los campos son obligatorios')
                capId('erroresForm').classList.add('alert-warning')
                capId('erroresForm').innerText = 'Hay campos con errores'
                error = true
            }
            
        }

        !error && this.submit()



    })




})









// let ulErrores = document.getElementById('erroresForm')
// if (errores.length > 0) {
//     e.preventDefault();

    
//     for (let i = 0; i < errores.length; i++) {
//        ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
        
//     }
// }





// })
    






