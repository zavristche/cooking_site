//Модальное окно
document.getElementById("btn-setting").addEventListener("click", function() {
    document.getElementById("modal-setting").classList.add("open")
})

document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("modal-setting").classList.remove("open")
})

//Переключение раздела настроек
function showSetting(active, hidden) {
    hidden.style.display = 'none';
    active.style.display = 'flex';
}

let profule = document.querySelector('#profile');
let security = document.querySelector('#security');
let btnProfile = document.querySelector('#btn-profile');
let btnSecurity = document.querySelector('#btn-security');

btnSecurity.addEventListener('click', function(){
    btnSecurity.classList.add('active');
    btnProfile.classList.remove('active');
    showSetting(security, profule);
});
btnProfile.addEventListener('click', function(){
    btnProfile.classList.add('active');
    btnSecurity.classList.remove('active');
    showSetting(profule, security);
});



