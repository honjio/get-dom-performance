const parent = document.querySelector('.js-list');
const item = document.getElementById('js-item');


console.time('document.getElementsByClassName[0]');
for (let i = 0; i < 50000; i++) {
    document.getElementsByClassName('js-item')[0].textContent = i;
}
console.timeEnd('document.getElementsByClassName[0]');

console.time('document.querySelector');
for (let i = 0; i < 50000; i++) {
    document.querySelector('.js-item').textContent = i;
}
console.timeEnd('document.querySelector');

console.time('parent.querySelector');
for (let i = 0; i < 50000; i++) {
    parent.querySelector('.js-item').textContent = i;
}
console.timeEnd('parent.querySelector');

console.time('document.getElementById');
for (let i = 0; i < 50000; i++) {
    document.getElementById('js-item').textContent = i;
}
console.timeEnd('document.getElementById');

console.time('save to variable');
for (let i = 0; i < 50000; i++) {
    item.textContent = i;
}
console.timeEnd('save to variable');


console.time('document.getElementsByClassName');
for (let i = 0; i < 50000; i++) {
    document.getElementsByClassName('js-item');
}
console.timeEnd('document.getElementsByClassName');

console.time('parent.getElementsByClassName');
for (let i = 0; i < 50000; i++) {
    parent.getElementsByClassName('js-item');
}
console.timeEnd('parent.getElementsByClassName');

console.time('document.querySelectorAll');
for (let i = 0; i < 50000; i++) {
    document.querySelectorAll('.js-item');
}
console.timeEnd('document.querySelectorAll');

console.time('parent.querySelectorAll');
for (let i = 0; i < 50000; i++) {
    parent.querySelectorAll('.js-item');
}
console.timeEnd('parent.querySelectorAll');

