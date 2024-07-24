function verificar() {
    var palavra = document.querySelector('#palavra').value;
    var palavra = palavra.toLowerCase();
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    var resultado = [];
    var cont = 0;
    for (var i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            cont++;
        }
    }

    document.querySelector('#vogais').innerHTML = cont + " Vogais";
 
}