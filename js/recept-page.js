// let closer = document.getElementById("close-modal");
// let modal = document.getElementById("modal-save");
// let btnSave = document.getElementById("btn-save");
// // console.log(btnSave);
// overModal(btnSave, modal);

// function overModal(buttonNaem, modalName) {
//     let modal = document.getElementById(modalName);
//     let button = document.getElementById(buttonNaem);

//     button.addEventListener("mouseover", function(){
//         modal.style.display = "flex";
//     });
// }


//Модальные окна
function showModal(modalName) {
    let modal = document.getElementById(modalName);
    modal.style.display = "flex";
}

function closeModal(modalName) {
    let modal = document.getElementById(modalName);
    modal.style.display = "none";
}

// Порции
document.getElementById("btn-pluse").addEventListener("click", 
    function (){
        let input = document.getElementById("input-portions");
        let portions = Number(input.value);
        let items = document.getElementsByClassName('checkbox__item-value');

        if(Number(input.value) != 100){
            input.value = Number(input.value) + 1
            for (let i = 0; i < items.length; i++) {
                items[i].innerText = Math.round(Number(items[i].innerText) / portions * Number(input.value));
            }
        }
    });

document.getElementById("btn-minuse").addEventListener("click", 
    function (){
        let input = document.getElementById("input-portions");
        let portions = Number(input.value);
        let items = document.getElementsByClassName('checkbox__item-value');

        if(Number(input.value) != 1){
            input.value = Number(input.value) - 1;

            for (let i = 0; i < items.length; i++) {
                items[i].innerText = Math.round(Number(items[i].innerText) / portions * Number(input.value));
            }
        }
    });