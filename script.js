const inicioPrograma = Number(prompt(`
    ======= Bem-Vindo ========
    O que deseja comprar?
    ==========================
    [1] - Banana
    [2] - Maça
    [3] - Manga
    [4] - Laranja
    [5] - Limão
    `))

function comprarBanana() {
    alert("Preço da banana é R$1,30 a unidade, apartir 12 unidasdes o preço é R$1,00")
    var qtdBanana = Number(prompt("Quantas bananas você deseja comprar?"))
    var resultado = 0
    if (qtdBanana >= 12) {
        resultado = qtdBanana * 1
        alert(`Você comprou ${qtdBanana} bananas e esse é o valor ${resultado.toLocaleString('pt-br',
            {
                style: 'currency',
                currency: 'BRL',
            })}`)
    }
    else {
        resultado = qtdBanana * 1.30
        alert(`Você comprou ${qtdBanana} bananas e esse é o valor ${resultado.toLocaleString('pt-br',
            {
                style: 'currency',
                currency: 'BRL',
            })}`)
    }
}
function comprarMaca() {
    alert("O KG da maça é R$8,55 apartir de 2KG vai sair por R$6,99")
    var kgMaca = Number(prompt("Quantos KG de maçã você vai querer?"))
    var resultado = 0
    if (kgMaca >= 2) {
        resultado = kgMaca * 6, 99
        alert(`Você comprou ${kgMaca}KG e saiu por ${resultado.toLocaleString('pt-br',
            {
                style: 'currency',
                currency: 'BRL',
            })}`)
    }
    else {
        resultado = kgMaca * 8, 55
        alert(`Você comprou ${kgMaca}KG e saiu por ${resultado.toLocaleString('pt-br',
            {
                style: 'currency',
                currency: 'BRL',
            })}`)
    }
}
function comprarManga() {

    var manga = prompt(`Qual tipo de manga você quer?
    [1]Palmer R$5,49
    [2]Rosa R$10,00
    [3]Tommy R$2,99
    `)
    const qtdManga = Number(prompt("Quantas Mangas você quer?"))
    switch (manga & qtdManga) {
        case 1:
            alert(`Você comprou ${qtdManga} da Palmer e saiu por ${qtdManga * 5.49}`)
            break;
        case 2:
            alert(`Você comprou ${qtdManga} da Rosa e saiu por ${qtdManga * 10.00}`)
            break
        case 3:
            alert(`Você comprou ${qtdManga} da Tommy e saiu por ${qtdManga * 2.99}`)
            break
        default:
            alert("Não existe essa opção")
            break;
    }
}
function comprarLaranja(){
    /* [1] Laranja-pera R$ 5,99 KG a cima 2 KG R$ 5,00
        [2] Laranja-lima R$ 3,00* KG a cima 3 KG R$ 2,00
        [3] Laranja-Bahia R$ 4,00 KG a cima 4 KG R$ 3,50 */
}
switch (inicioPrograma) {
    case 1:
        comprarBanana()
        break;
    case 2:
        comprarMaca()
        break;
    case 3:
        comprarManga()
        break;
    case 4:

        break;
    case 5:

        break;
    default:

        break;
}