function* geradora(){
    
    yield function(){
        console.log('yield 1')
    };

    // return (){...} se usar o return cancela os proximos yield

    yield function(){
        console.log('yield 2')
    };
}

const gerar = geradora();
const fun1 = gerar.next().value;
const fun2 = gerar.next().value;

fun1();
fun2();