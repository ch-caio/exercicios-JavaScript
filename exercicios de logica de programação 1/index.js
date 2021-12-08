function soma (x ,y){
    if (typeof x !== 'number' || typeof y !==  'number') {
        throw new Error ('x e y precisam sernumeros');
    }
    return x + y;
}

try {
    console.log(soma(1, 2)) 
        console.log('1', 2);
    } catch (error) {
        console.log(error)
        onsole.log("mensagem de erro")
    }

    try {
        console.log('tratar o arquivo')
    } catch (erro) {
        console.log('trata o erro', erro)
    } finally {
        console.log('sempre sera executado')
    }
