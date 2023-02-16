let box1 = document.querySelector('.box1')
//box1.remove()


let p = document.querySelectorAll('p');

 for (let i = 0; i < p.length; i++) {
     p[i].remove()
 }
  
let h1 = document.createElement('h1')
h1.textContent = 'Заголовок'


box1.append(h1)