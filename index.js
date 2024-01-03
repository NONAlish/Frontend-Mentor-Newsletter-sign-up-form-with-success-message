const inputValue = document.querySelector('.input');
const btn = document.querySelector('.btn');
const form_Valid = document.querySelector('.form_Valid');
const modal_window = document.querySelector('.modal_window');
const container = document.querySelector('.container')



btn.addEventListener('click', (event)=> {
    event.preventDefault();
    function buttonActive(){
        const isMail = ['@gmail.com', '@yahoo.com', '@yahoo.com', '@outlook.com', '@aol.com', '@icloud.com', '@protonmail.com', '@mail.com', '@yandex.ru', 'live.com'];
        let isError = 1
        for (var mail of isMail) {
            if (inputValue.value.includes(mail)){
                isError = 0
            }
        }
        if (isError){
            inputValue.style.border = '2px solid hsl(4, 100%, 67%)';
            inputValue.style.color = 'hsl(4, 100%, 67%)';
            inputValue.style.backgroundColor = '#f4c2c2';
            form_Valid.style.display = 'block'
        }else{
            modal_window.style.display = 'block';
            container.style.display = 'none';
        }
    }
    buttonActive()
})