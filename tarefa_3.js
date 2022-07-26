let nota1 = 6.0;
let nota2 = 4.0;
let nota3 = 8.0;

function media_nota(nota1, nota2, nota3) {
    media = (nota1 + nota2 + nota3) / 3
    if (media >= 6) {
        console.log(media, "Aprovado")
    }
    else {
        console.log(media, "Reprovado")
    }
}

media_nota(nota1, nota2, nota3)