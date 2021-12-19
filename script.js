let whatNumber = prompt("Digite um número:")

for (let contador = 1; contador <= 10; contador++) {

    let calculo =  parseInt(whatNumber) * contador

    document.write(`${parseInt(whatNumber)} x ${contador} = ${calculo} <br>`)
}