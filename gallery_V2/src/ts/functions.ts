import { DOM } from './dom'
import { photos } from './types'
let currentPage = 1;
const elements = 9;
export async function mainLogic(): Promise<void> {
    await getResponse();
    fillPhotos(DOM.state.photos, DOM.photoArea, elements, currentPage);
    setPagination(DOM.state.photos, DOM.paginationElem, elements);
}
export async function getResponse(): Promise<string> {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=27');
    const photos = await res.json();
    return DOM.state.photos = photos;
};


function fillPhotos(photos: Array<photos>, wrapper: Element, elemPerPage: number, page: number): void {
    wrapper.innerHTML = "";
    page--;

    let start = elemPerPage * page;
    let end = start + elemPerPage;
    let paginatedElems = photos.slice(start, end);
    for (let i = 0; i < paginatedElems.length; i++) {
        let photo = paginatedElems[i];
        let photoElement = document.createElement('img');
        photoElement.setAttribute("src", `${photo.thumbnailUrl}`);
        photoElement.classList.add('photo');
        photoElement.addEventListener('click', modalImage.bind(null, photo.url));
        wrapper.appendChild(photoElement);
    }
}

function setPagination(items: Array<photos>, wrapper: Element, elemPerPage: number): void {
    wrapper.innerHTML = "";
    let pageCount = Math.ceil(items.length / elemPerPage);
    for (let i = 1; i < pageCount + 1; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function PaginationButton(page: number, items: Array<photos>): Element {
    let button = document.createElement('button')
    button.innerText = `${page}`;
    if (currentPage === page) button.classList.add('active');
    button.addEventListener('click', function () {
        currentPage = page;
        fillPhotos(items, DOM.photoArea, elements, currentPage);
        let currentBtn = document.querySelector('button.active');
        currentBtn.classList.remove('active');
        button.classList.add('active');
    })
    return button;
}


function modalImage(url: string): void {
    DOM.modalBody.innerHTML = '';
    DOM.bigImage.setAttribute('src', `${url}`);
    DOM.modalBody.appendChild(DOM.bigImage);
    DOM.modalParent.classList.add('active');
    closeImg()
}

function closeImg(): void {
    DOM.close.addEventListener('click', function () {
        DOM.modalParent.classList.remove('active');
    });
}
