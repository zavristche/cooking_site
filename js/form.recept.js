//Модальные окна
function showModal(modalName) {
    let modal = document.getElementById(modalName);
    modal.style.display = "flex";
}

function closeModal(modalName) {
    let modal = document.getElementById(modalName);
    modal.style.display = "none";
}

// Ограничение textarea enter
let textarea = document.querySelector('.preview-content__chapter-textarea');
textarea.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });

// Расширение блока с текстом
function autoResize(areaName, rows){
	let area = document.querySelector(areaName);
	let minRows = rows;

	if (area) {
		function setRows() {
			area.rows = minRows;
			do {
				if (area.clientHeight != area.scrollHeight) area.rows += 1;
			} while (area.clientHeight < area.scrollHeight);
		}
		setRows();
		area.rows = minRows;

		area.onkeyup = function(){
			setRows();
		}
	}
}

if (window.addEventListener)
	window.addEventListener("load", autoResize('#recept-desc', 3), false);
else if (window.attachEvent)
	window.attachEvent("onload", autoResize('#recept-desc', 3));

// Сложность
document.getElementById("btn-pluseP").addEventListener("click", 
    function (){
        let list = document.getElementById("complex-list");
        let item = document.getElementById('complex-item');
        let btnPlus = document.getElementById("btn-pluseP");

        if(list.children.length < 3){
            list.appendChild(item.cloneNode(true));
        } else if(list.children.length == 3){
            list.appendChild(item.cloneNode(true));
            btnPlus.style.display = "none";
        }
    });

    document.getElementById("btn-minuseP").addEventListener("click", 
    function (){
        let list = document.getElementById("complex-list");
        let item = document.getElementById('complex-item');
        let btnPlus = document.getElementById("btn-pluseP");

        if(list.children.length == 4){
            list.removeChild(item);
            btnPlus.style.display = "flex";
        } else if(list.children.length < 4, list.children.length != 1) {
            list.removeChild(item);
        }
    });

// Кухня мира
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

let searchInput = document.querySelector('.search-select__input');
let searchList = document.getElementById('kitchen-list');

let searchDiv = document.getElementById('search-select');

document.addEventListener("click", function(event) {
    let isClickInsideDiv = searchDiv.contains(event.target)
    if (!isClickInsideDiv) {
        searchList.style.display = "none";
    } else {
        searchList.style.display = "flex";
    }
});


function search(word, list) {

    return list.filter( item => {
        const regex = new RegExp(word, "gi");
        return item.match(regex);
    });
};

function showResult(list, listHtml){

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
                this.value = listItems[i].innerText;
                listHtml.style.height = 0;
            }
        }.bind(this));
    }
    listHtml.addEventListener('click input keyup', showModal(listHtml.id));

};
searchInput.addEventListener('keyup', showResult.bind(searchInput, kitchenList, searchList));

// Метки
let products = ['Яйцо', 'Молоко', 'Хлеб', 'Масло'];
let meals = ['Завтрак', 'Обед', 'Ужин', 'Полдник'];
const tags = [...products, ...meals];

let searchInputTag = document.getElementById('search-input-tag');
let searchListTag = document.getElementById('tag-list');
let searchDivTag = document.getElementById('search-tag');
let searchTag = document.querySelector('.search-teg__teg');
let selectedTags = document.getElementById('selected-tag');

function showResultTags(list, listHtml){

    const result = search(this.value, list);
    let html = result.map(item => {
        return `<li class="search-select__list-item">${item}</li>`;
    }).join('');
    if(html.length == 0){
        html = `<li class="search-select__list-item">Не найдено</li>`;
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
                let tag = selectedTags.appendChild(searchTag.cloneNode(true));
                tag.style.display = 'flex';
                tag.firstElementChild.innerHTML = `<span class="teg__lable">${lableTag}</span>`;
                listHtml.style.height = 0;

            }
        }.bind(this));
    }
    listHtml.addEventListener('click input keyup', showModal(listHtml.id));

};

searchInputTag.addEventListener('keyup', showResultTags.bind(searchInputTag, tags, searchListTag));

// Порции
document.getElementById("btn-pluse").addEventListener("click", 
    function (){
        let input = document.getElementById("input-portions");
        
        if(Number(input.value) != 100){
            input.value = Number(input.value) + 1;
        }
    });

document.getElementById("btn-minuse").addEventListener("click", 
    function (){
        let input = document.getElementById("input-portions");

        if(Number(input.value) != 1){
            input.value = Number(input.value) - 1;
        }
    });

// Добавление ингредиентов
let ingredList = document.querySelector('#ingredList');
let decoreList = document.querySelector('#decorList');

document.getElementById('addIngred').addEventListener('click', function(){
    let ingredPattern = document.querySelector('#ingredient');
    let error = ingredList.querySelector('.ingred-error');
    if(ingredList.children.length < 10) {
        if(error) {
            ingredList.removeChild(error);
        }
        validation = true;
        let item = ingredPattern.content.cloneNode(true);
        ingredList.appendChild(item);
    } else {
        validation = false;
        if(!error){
            let html = `<span class="ingred-error" id="">Нельзя добавить более 10 продуктов</span>`;
            ingredList.insertAdjacentHTML( 'beforeend', html);
        }
    }
});

document.getElementById('addDecor').addEventListener('click', function(){
    let ingredPattern = document.querySelector('#decorate');
    let error = decoreList.querySelector('.ingred-error');
    if(decoreList.children.length < 10) {
        if(error) {
            decoreList.removeChild(error);
        }
        validation = true;
        let item = ingredPattern.content.cloneNode(true);
        decoreList.appendChild(item);
    } else {
        validation = false;
        if(!error){
            let html = `<span class="ingred-error">Нельзя добавить более 10 продуктов</span>`;
            decoreList.insertAdjacentHTML( 'beforeend', html);
        }
    }
});

// let error = ingredList.querySelector('.ingred-error');


// Шаги
// function autoResizeSteps(areaName, rows){

//     // forEach(())
// 	let area = areaName;
// 	let minRows = rows;
//     // console.log(area);
// 	if (area) {
// 		function setRows() {
// 			area.rows = minRows;
// 			do {
// 				if (area.clientHeight != area.scrollHeight) area.rows += 1;
// 			} while (area.clientHeight < area.scrollHeight);
// 		}
// 		setRows();
// 		area.rows = minRows;

// 		area.onkeyup = function(){
// 			setRows();
// 		}
// 	}
// }

document.getElementById('btn-step').addEventListener('click', function(){
    let stepsList = document.querySelector('.main-recept__steps');
    let stepPattern = document.querySelector('#step-form');
    let item = stepPattern.content.cloneNode(true);

    let number = item.querySelector('.step-form__title-number');
    number.innerText = `${stepsList.children.length}.`;
    stepsList.appendChild(item);

});
// console.log(document.querySelector('.main-recept__steps').lastElementChild);
// if (window.addEventListener) {
//     window.addEventListener("load", autoResizeSteps(document.querySelector('.main-recept__steps').lastElementChild, 3), false);
// }
// else if (window.attachEvent)
//     window.attachEvent("onload", autoResizeSteps(document.querySelector('.main-recept__steps').lastElementChild, 3), false);
// let descList = document.querySelector('.step-form__desc');

// if (window.addEventListener) {
//     window.addEventListener("load", autoResizeSteps('.step-form__desc', 3), false);
// }
// else if (window.attachEvent)
//     window.attachEvent("onload", autoResizeSteps('.step-form__desc', 3), false);






