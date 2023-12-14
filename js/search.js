document.getElementById("btn-filter").addEventListener("click", function() {
    document.getElementById("modal-filter").classList.add("open")
})

document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("modal-filter").classList.remove("open")
})

//Модальные окна
function showModal(modalName) {
    let modal = document.getElementById(modalName);
    modal.style.display = "flex";
}

function closeModal(modalName) {
    let modal = document.getElementById(modalName);
    modal.style.display = "none";
}

// Метки
function search(word, list) {

    return list.filter( item => {
        const regex = new RegExp(word, "gi");
        return item.match(regex);
    });
};

//Продукты
const tags = [
    "Молоко",
    "Яйца",
    "Хлеб",
    "Чай",
    "Кофе",
    "Мясо",
    "Рыба",
    "Овощи",
    "Фрукты",
    "Сыр",
    "Масло",
    "Сахар",
    "Лук",
    "Чеснок",
    "Морковь",
    "Перец",
    "Помидоры",
    "Огурцы",
    "Картофель",
    "Рис",
    "Макароны",
    "Гречка",
    "Суп",
    "Салат",
    "Каша",
    "Капуста",
    "Бананы",
    "Яблоки",
    "Груши",
    "Апельсины",
    "Мандарины"
  ];

let searchTag = document.querySelector('.search-teg__teg');//Шалблон для тега


let inputProductP = document.getElementById('search-input-productP');//Поле ввода
let listProductP = document.getElementById('product-listP');//Список найденного
let divProductP = document.getElementById('search-productP');//Контейнер всего блока
let selectedProductP = document.getElementById('tags-productP');//Контейнер всех тегов

function showResultTags(list, listHtml, divTags){

    const result = search(this.value, list);
    let html = result.map(item => {
        return `<li class="search-select__list-item">${item}</li>`;
    }).join('');
    if(html.length == 0){
        html = `<li class="search-select__list-item">Не найдено</li>`
    }

    if(result.length > 2){
        listHtml.style.height = '10rem';
    } else {
        listHtml.style.height = 'auto';
    }
    listHtml.innerHTML = html;

    let listItems = document.querySelectorAll('.search-select__list-item');

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', function () {
            if(listItems[i].innerText != 'Не найдено'){
                let lableTag = listItems[i].innerText;
                let tag = divTags.appendChild(searchTag.cloneNode(true));
                tag.style.display = 'flex';
                tag.firstElementChild.innerHTML = `<span class="teg__lable">${lableTag}</span>`;
                listHtml.style.height = 0;

            }
        }.bind(this));
    }

    listHtml.addEventListener('click input keyup', showModal(listHtml.id));

};

inputProductP.addEventListener('keyup', showResultTags.bind(inputProductP, tags, listProductP, selectedProductP));

document.addEventListener("click", function(event) {
    let isClickInsideDiv = inputProductP.contains(event.target)
    if (!isClickInsideDiv) {
        listProductP.style.display = "none";
    } else {
        listProductP.style.display = "flex";
    }
});

let inputProductM = document.getElementById('search-input-productM');
let listProductM = document.getElementById('product-listM');
let divProductM = document.getElementById('search-productM');
let selectedProductM = document.getElementById('tags-productM');

inputProductM.addEventListener('keyup', showResultTags.bind(inputProductM, tags, listProductM, selectedProductM));

document.addEventListener("click", function(event) {
    let isClickInsideDiv = inputProductM.contains(event.target)
    if (!isClickInsideDiv) {
        listProductM.style.display = "none";
    } else {
        listProductM.style.display = "flex";
    }
});

const kitchenList = [
    "Французская кухня",
    "Итальянская кухня",
    "Японская кухня",
    "Китайская кухня",
    "Мексиканская кухня",
    "Тайская кухня",
    "Русская кухня",
    "Грузинская кухня",
    "Индийская кухня",
    "Греческая кухня",
    "Испанская кухня",
    "Американская кухня"
];

let inputCook = document.getElementById('search-input-cook');
let listCook = document.getElementById('product-cook');
let divCook = document.getElementById('search-cook');
let selectedCook = document.getElementById('tags-cook');

inputCook.addEventListener('keyup', showResultTags.bind(inputCook, kitchenList, listCook, selectedCook));

document.addEventListener("click", function(event) {
    let isClickInsideDiv = inputCook.contains(event.target)
    if (!isClickInsideDiv) {
        listCook.style.display = "none";
    } else {
        listCook.style.display = "flex";
    }
});

const holidays = [
    "Пасха",
    "Новый Год",
    "День Рождения",
    "8 Марта",
    "Наурыз Мейрам",
    "Масленица",
    "День Защитника Отечества",
    "Навруз",
    "День Победы",
    "Рождество"
];

let inputHoliday = document.getElementById('search-input-holiday');
let listHoliday = document.getElementById('product-holiday');
let divHoliday = document.getElementById('search-holiday');
let selectedHoliday = document.getElementById('tags-holiday');

inputHoliday.addEventListener('keyup', showResultTags.bind(inputHoliday, holidays, listHoliday, selectedHoliday));

document.addEventListener("click", function(event) {
    let isClickInsideDiv = inputHoliday.contains(event.target)
    if (!isClickInsideDiv) {
        listCook.style.display = "none";
    } else {
        listCook.style.display = "flex";
    }
});