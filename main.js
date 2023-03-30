document.addEventListener('DOMContentLoaded', () => {
//menu open function
    document.querySelector('#menu').onclick = () => {
        document.querySelector('#main-menu').style.display = 'block';
    };
//menu close function
    document.querySelector('#xmark').onclick = () => {
        document.querySelector('#main-menu').style.display = 'none';
    };
//desktop open
    document.querySelector('#parent').onclick = () =>{
        document.querySelector('#openbtn').style.left = '0';
    };
//desktop close
    document.querySelector('#closebtn').onclick = () =>{
        document.querySelector('#openbtn').style.left = '-1300px';
    };




});