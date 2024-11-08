
function triangle(base, height) {
    base = prompt('Digite o valor da base')
    height = prompt('Digite o valor da altura')
    return alert((base*height/2))
}
function retangle(base,height){
    base = prompt('digite o valor da base')
    height = prompt('digite o valor da altura')
    return alert(base*altura)
}
function square(side){
    side1 = prompt('digite o valor do primeiro lado')
    side2 = prompt('digite o valor do segundo lado')
    return alert(side*side)
}
function trapeze(baseLargest,baseSmallest, height){ 
    baseLargest = prompt('digite o valor da base maior')
    baseSmallest = prompt('digite o valor da base menor')
    height = prompt('digite o valor da altura')
    return alert((baseLargest+baseSmallest)*height/2)
}
function circle(ray){ 
    ray = prompt('digite o valor do raio')
    return alert(3.14*(ray*ray))
}
let menu = ''
do{
menu = prompt(`opção disponível
    1- área do triângulo
    2- área do retângulo
    3- área do quadrado
    4- área do trapézio
    5- área do circulo
    6- sair`)
    switch(menu){
        case'1': 
        triangle()
        break
        case'2': 
        retangle(parseInt(prompt('digite o valor')))
        break
        case'3':
        square(parseInt(prompt('digite o valor')))
        break
        case'4':
        trapeze(parseInt(prompt('digite o valor')))
        break
        case'5':
        circle(parseInt(prompt('digite o valor')))
        break
        case'6': 
        alert('saindo...')
        break
    }
} while(menu !=="6")