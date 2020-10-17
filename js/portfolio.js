function construtora(tagName,name,add){
    const elemento = document.createElement(tagName)
    elemento.className = name
    return elemento
}

const conteudo = document.querySelector('[conteudo]')

const cont_name = construtora('div','cont_name')
conteudo.appendChild(cont_name)

const cont_main = construtora('div','cont_main')
conteudo.appendChild(cont_main)

const name = construtora('h1','name')
cont_name.appendChild(name).insertAdjacentText('afterbegin','Pamela Marinho')

const navegacao = construtora('nav','pt-nav')
cont_main.appendChild(navegacao)

const areaText = construtora('section','areaText')
cont_main.appendChild(areaText)

const btn_sobre = construtora('a','btnSobre')
btn_sobre.setAttribute('href','html/sobre.html')

const btn_contato = construtora('a','btnContato')
btn_contato.setAttribute('href','html/contato.html')

navegacao.appendChild(btn_contato).insertAdjacentText('afterbegin','Contato')
navegacao.appendChild(btn_sobre).insertAdjacentText('afterbegin','Sobre')

btn_sobre.onclick = function(e){
    changeColor()
    e.preventDefault()
    fetch(btn_sobre.getAttribute('href'))
         .then(resp => resp.text())
         .then(html => areaText.innerHTML=html)
}

btn_contato.onclick = function(e){
    changeColor()
    e.preventDefault()
    fetch(btn_contato.getAttribute('href'))
     .then(resp => resp.text())
     .then(html => areaText.innerHTML=html)
}

function changeColor(){
   const newColor = Math.floor(Math.random() * Math.floor(360))
   name.style.color=`hsl(${newColor}, 82%, 65%)`
   btn_contato.style.backgroundColor=`hsl(${newColor}, 82%, 65%)`
   btn_sobre.style.backgroundColor=`hsl(${newColor}, 82%, 65%)`
}

name.onmouseover = function(e){changeColor()} 








