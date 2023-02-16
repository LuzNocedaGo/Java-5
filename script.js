let box1 = document.querySelector('.box1')
//box1.remove()

let text = document.querySelector('.text')
let p = document.querySelectorAll('p');

// for (let i = 0; i < p.length; i++) {
//     p[i].remove()
// }
  
let h1 = document.createElement('h1')
h1.textContent = 'Заголовок'


text.after(h1)