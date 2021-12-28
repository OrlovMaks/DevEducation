import '../css/style.css'
import "core-js/stable";
import "regenerator-runtime/runtime";
const menu = document.querySelector('.mainMenu') as HTMLElement
const menuItemConteiner = document.querySelector('.menuItemConteiner')
let temp = ``;

const axios = require('axios');
async function getUniversities() {
    const result = await axios.get("http://localhost:3001/get-all-data");
    console.log(result.data)
    fillHtml(result.data)
    return result
}
getUniversities();

function fillHtml(data) {
    data.forEach(element => {
        temp += `
        <div class="menuItem" id="${element.id}">
        <p class="univName" >${element.name}</p>
        <div class="podMenu hidden">`
        element.students.forEach(element => {
            temp += `
            <p class="name">Name:<span>${element.name}</span></p> 
            <p class="rating">Rating:<span>${Math.round(element.rating)}</span></p>
            `
        });
        temp += `</div>
        </div>`
    });
    menuItemConteiner.innerHTML = temp;
}
menu.onclick = function (e) {
    const target = e.target
    if ((<HTMLElement>target).parentElement.className === 'mainMenu') {
        if (menuItemConteiner.classList.contains('hidden')) {
            menuItemConteiner.classList.remove('hidden')
        }
        else {
            menuItemConteiner.classList.add('hidden')
        }

    }
    else if ((<HTMLElement>target).parentElement.className === 'menuItem') {
        if ((<HTMLElement>target).parentNode.children[1].classList.contains('hidden')) {
            (<HTMLElement>target).parentNode.children[1].classList.remove('hidden')
        }
        else {
            (<HTMLElement>target).parentNode.children[1].classList.add('hidden')
        }
    }
}
