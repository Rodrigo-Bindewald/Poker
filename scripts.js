// Criar o baralho
function createBaralho() {
    const nipes = ['D', 'H', 'S', 'C'];
    const valores = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    let baralho = []
    
    for(var nipe = 0; nipe < 4; nipe += 1) {
        for(var valor = 0; valor < 13; valor += 1){
            //console.log(valores[valor] + nipes[nipe]);
            baralho.push(valores[valor] + nipes[nipe]);    
        }
    }
    return baralho
}
// Embaralhar cartas do baralho
function shuffleBaralho(baralho) {
    for(var i = 0; i < 52; i += 1) {
        var carta = baralho[i];
        var indiceAleatorio = Math.floor(Math.random() * 52);
        baralho[i] = baralho[indiceAleatorio];
        baralho[indiceAleatorio] = carta;
    }
    
}
// Criar novo baralho com cartas embaralhadas
var cartasEmbaralhadas = createBaralho();
shuffleBaralho(cartasEmbaralhadas);
// console.log(cartasEmbaralhadas);

// Mão de cartas cartas
var maoCartas = cartasEmbaralhadas.splice(0, 5);
var maoCartasString = maoCartas.join(' ');

console.log(maoCartas);
console.log(typeof maoCartasString);