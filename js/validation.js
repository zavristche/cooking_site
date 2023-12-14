function validation(form) {
    let result = true;
    let patternEmail = /^[^s@]+@[^s@]+\.[^s@]+$/;

    function createError(input, message) {
        let parent = input.parentNode;
        let error = parent.querySelector('.validation__error');

        if(!parent.contains(error)) {
            input.classList.add('error');
            let html = `<span class="validation__error">${message}</span>`;
            parent.insertAdjacentHTML( 'beforeend', html);
        }
    }

    function removeError(input) {
        let parent = input.parentNode;
        if (window.addEventListener) {
            let error = parent.querySelector('.validation__error');
            if(error) {
                input.classList.remove('error');
                parent.removeChild(error);
            }
        }
    }

    form.querySelectorAll('input').forEach(input => {

        if(!input.value) {
            createError(input, 'Пустое поле ввода');
            result = false;  
        } else {
            removeError(input);
            if(input.id == 'name') {    
                if(input.value.length < 2){
                    createError(input, 'Введенное имя меньше двух символов');
                    result = false;
                } else if(input.value.length > 46) {
                    createError(input, 'Введенное имя более 46 символов');
                    result = false;
                } else {
                    removeError(input);
                }
            }
    
            if(input.id == 'email'){
                if(!patternEmail.test(input.value)){
                    createError(input, 'Введен некорректный email');
                    result = false;
                }
            }
    
            if(input.id == 'password') {
                if(input.value.length < 12) {
                    createError(input, 'Пароль менее 12 символов');
                    result = false;
                } else {
                    removeError(input);
                }
            }

            if(input.id == 'password-repeat') {
                let password = document.querySelector('#password').value;
                if(input.value != password) {
                    createError(input, 'Пароли не совпадают');
                    result = false;
                } else {
                    removeError(input);
                }
            }
        }
    });

    return result;
}


document.querySelector('.validation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    validation(this);
});