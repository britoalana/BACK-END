function a(){
    console.log('Executando a()')
    c()
}

function b(){
    console.log('Executando b()')
    a()
}

function c(){
    console.log('Executando c()')
    b()
}

c()
b()
a()