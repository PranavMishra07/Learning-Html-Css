let head_element = document.createElement('h1')
head_element.textContent = "This is Head  h1 From Js"

let bd = document.body

bd.append(head_element)    // adding to Html  by append


let head2 = document.createElement('h2')
head2.textContent = "This is Head2 h2 from js"
bd.append(head2)   //

head_element.setAttribute('align', 'center')
// head2.setAttribute('style', 'color:blue')
head2.setAttribute('style', 'background-color:blue;',)   // css style by js with setattribute

bd.setAttribute('bgcolor', 'yellow')
// bd.removeAttribute('bgcolor')

let img = document.getElementById('image')
img.setAttribute('src', 'flif/four.jpeg')