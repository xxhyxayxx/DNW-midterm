document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementsByClassName('device-state');
    const item = document.getElementsByClassName('device-item')
    for(let i = 0; i < element.length; i++){
        if(element[i].innerText === "ON" || element[i].innerText === "OPEN" || element[i].innerText === "LOCK"){
            item[i].style.background = '#F87670';
            item[i].style.color = '#FFF';
        }
    }
});