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

switch (inicioPrograma) {
    case 1:
        alert("Banana")
        break;
    case 2:
        alert("Maça")
        break;
    case 3:
        alert("Manga")
        break;
    case 4:
        alert("Laranja")
        break;
    case 5:
        alert("Limão")
        break;
    default:
        alert("Não existe essa opção")
        break;
}