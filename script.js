// DOMContentLoaded Сфмый верхний узел докуьунтп
//document.documentElement=html;
document.documentElement;
console.log(document.documentElement);

//title
console.log(document.title)
document.title = 'Dom -д';
//body
console.log(document.body);

//head
console.log(document.head);
// querySelector возращает объект , соответвующий -узлу на странице

let element = document.querySelector('#container');

element.style.color = 'red';
element.style.fontSize = '30px';
console.log(element.style);

//          Свойство textContent- текстовое содержимое
let element1 = document.querySelector('.hello');
console.log(element1.textContent);
element.textContent = 'C '

//сВОЙСТОВО innerHTML - Возращает HTML-код  всего б что вложено в текущий  элемент
console.log(element.innerHTML);

//CВОЙСто оuterHTML - ВОЗРАЩАЕТ ТЕКУЩЕГО ЭЛЕМЕНТА  И ВСЕГО ЧТО В
console.log(element.outerHTML);
//Добавление новых Dom- узлов
//document.createElement()-создает  элемент в памяти , но не добавляет его  на c
const element2 = document.createElement('div')

куда_добавить.appendChild()

element.appendChild(element2)
element2.textContent = 'Добавление элемент'