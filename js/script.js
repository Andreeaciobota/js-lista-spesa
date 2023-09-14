const shopping = ['Uva', 'Pasta', 'Spezie', 'Detersivo', 'Biscotti', 'Caramelle', 'Cracke', 'Verdura', 'Salatini'];
const resultList = document.getElementById('result');

// Organizazione ciclo
let list = '';
let goods = '';

// for(let i = 0; i < shopping.length; i++) {
//     goods = `<li>${shopping[i]}</li>`;
//     list += goods;
// }

let i = 0;
while(i < shopping.length ){
    goods = `<li>${shopping[i]}</li>`;
    list += goods;
    i++;
}

// Stampo
resultList.innerHTML = list;
